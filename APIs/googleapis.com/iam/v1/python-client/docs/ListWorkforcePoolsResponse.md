# ListWorkforcePoolsResponse

Response message for ListWorkforcePools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**workforce_pools** | [**List[WorkforcePool]**](WorkforcePool.md) | A list of pools. | [optional] 

## Example

```python
from openapi_client.models.list_workforce_pools_response import ListWorkforcePoolsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkforcePoolsResponse from a JSON string
list_workforce_pools_response_instance = ListWorkforcePoolsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkforcePoolsResponse.to_json())

# convert the object into a dict
list_workforce_pools_response_dict = list_workforce_pools_response_instance.to_dict()
# create an instance of ListWorkforcePoolsResponse from a dict
list_workforce_pools_response_from_dict = ListWorkforcePoolsResponse.from_dict(list_workforce_pools_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


