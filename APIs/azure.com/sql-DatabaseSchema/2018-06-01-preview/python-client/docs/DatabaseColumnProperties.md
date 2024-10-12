# DatabaseColumnProperties

Database column properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_type** | **str** | The column data type. | [optional] 

## Example

```python
from openapi_client.models.database_column_properties import DatabaseColumnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseColumnProperties from a JSON string
database_column_properties_instance = DatabaseColumnProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseColumnProperties.to_json())

# convert the object into a dict
database_column_properties_dict = database_column_properties_instance.to_dict()
# create an instance of DatabaseColumnProperties from a dict
database_column_properties_from_dict = DatabaseColumnProperties.from_dict(database_column_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


