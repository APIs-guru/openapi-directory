# QueryInsertVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Query name | 
**query** | **str** | Boolean query used for content categorization | 

## Example

```python
from openapi_client.models.query_insert_version import QueryInsertVersion

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInsertVersion from a JSON string
query_insert_version_instance = QueryInsertVersion.from_json(json)
# print the JSON string representation of the object
print(QueryInsertVersion.to_json())

# convert the object into a dict
query_insert_version_dict = query_insert_version_instance.to_dict()
# create an instance of QueryInsertVersion from a dict
query_insert_version_from_dict = QueryInsertVersion.from_dict(query_insert_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


