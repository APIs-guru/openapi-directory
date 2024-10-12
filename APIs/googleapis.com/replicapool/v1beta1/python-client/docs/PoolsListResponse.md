# PoolsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**resources** | [**List[Pool]**](Pool.md) |  | [optional] 

## Example

```python
from openapi_client.models.pools_list_response import PoolsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PoolsListResponse from a JSON string
pools_list_response_instance = PoolsListResponse.from_json(json)
# print the JSON string representation of the object
print(PoolsListResponse.to_json())

# convert the object into a dict
pools_list_response_dict = pools_list_response_instance.to_dict()
# create an instance of PoolsListResponse from a dict
pools_list_response_from_dict = PoolsListResponse.from_dict(pools_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


