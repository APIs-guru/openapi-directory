# QueryUpdateVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique query identifier | 
**name** | **str** | Query name | 
**query** | **str** | Boolean query used for content categorization | 

## Example

```python
from openapi_client.models.query_update_version import QueryUpdateVersion

# TODO update the JSON string below
json = "{}"
# create an instance of QueryUpdateVersion from a JSON string
query_update_version_instance = QueryUpdateVersion.from_json(json)
# print the JSON string representation of the object
print(QueryUpdateVersion.to_json())

# convert the object into a dict
query_update_version_dict = query_update_version_instance.to_dict()
# create an instance of QueryUpdateVersion from a dict
query_update_version_from_dict = QueryUpdateVersion.from_dict(query_update_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


