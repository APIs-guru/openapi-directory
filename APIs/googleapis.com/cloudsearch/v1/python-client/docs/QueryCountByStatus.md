# QueryCountByStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** |  | [optional] 
**status_code** | **int** | This represents the http status code. | [optional] 

## Example

```python
from openapi_client.models.query_count_by_status import QueryCountByStatus

# TODO update the JSON string below
json = "{}"
# create an instance of QueryCountByStatus from a JSON string
query_count_by_status_instance = QueryCountByStatus.from_json(json)
# print the JSON string representation of the object
print(QueryCountByStatus.to_json())

# convert the object into a dict
query_count_by_status_dict = query_count_by_status_instance.to_dict()
# create an instance of QueryCountByStatus from a dict
query_count_by_status_from_dict = QueryCountByStatus.from_dict(query_count_by_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


