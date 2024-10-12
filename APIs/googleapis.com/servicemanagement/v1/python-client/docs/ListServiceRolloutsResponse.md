# ListServiceRolloutsResponse

Response message for ListServiceRollouts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token of the next page of results. | [optional] 
**rollouts** | [**List[Rollout]**](Rollout.md) | The list of rollout resources. | [optional] 

## Example

```python
from openapi_client.models.list_service_rollouts_response import ListServiceRolloutsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceRolloutsResponse from a JSON string
list_service_rollouts_response_instance = ListServiceRolloutsResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceRolloutsResponse.to_json())

# convert the object into a dict
list_service_rollouts_response_dict = list_service_rollouts_response_instance.to_dict()
# create an instance of ListServiceRolloutsResponse from a dict
list_service_rollouts_response_from_dict = ListServiceRolloutsResponse.from_dict(list_service_rollouts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


