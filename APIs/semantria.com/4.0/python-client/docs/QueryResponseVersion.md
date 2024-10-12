# QueryResponseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique query identifier | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Query name | 
**query** | **str** | Boolean query used for content categorization | 

## Example

```python
from openapi_client.models.query_response_version import QueryResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponseVersion from a JSON string
query_response_version_instance = QueryResponseVersion.from_json(json)
# print the JSON string representation of the object
print(QueryResponseVersion.to_json())

# convert the object into a dict
query_response_version_dict = query_response_version_instance.to_dict()
# create an instance of QueryResponseVersion from a dict
query_response_version_from_dict = QueryResponseVersion.from_dict(query_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


