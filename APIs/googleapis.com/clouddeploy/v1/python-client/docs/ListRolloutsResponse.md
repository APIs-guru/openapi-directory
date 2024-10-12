# ListRolloutsResponse

ListRolloutsResponse is the response object reutrned by `ListRollouts`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**rollouts** | [**List[Rollout]**](Rollout.md) | The &#x60;Rollout&#x60; objects. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_rollouts_response import ListRolloutsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRolloutsResponse from a JSON string
list_rollouts_response_instance = ListRolloutsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRolloutsResponse.to_json())

# convert the object into a dict
list_rollouts_response_dict = list_rollouts_response_instance.to_dict()
# create an instance of ListRolloutsResponse from a dict
list_rollouts_response_from_dict = ListRolloutsResponse.from_dict(list_rollouts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


