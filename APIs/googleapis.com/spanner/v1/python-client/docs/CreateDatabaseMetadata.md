# CreateDatabaseMetadata

Metadata type for the operation returned by CreateDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | The database being created. | [optional] 

## Example

```python
from openapi_client.models.create_database_metadata import CreateDatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDatabaseMetadata from a JSON string
create_database_metadata_instance = CreateDatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateDatabaseMetadata.to_json())

# convert the object into a dict
create_database_metadata_dict = create_database_metadata_instance.to_dict()
# create an instance of CreateDatabaseMetadata from a dict
create_database_metadata_from_dict = CreateDatabaseMetadata.from_dict(create_database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


