# RejectsListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**detail** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**expired** | **bool** |  | [optional] 
**expires_at** | **str** |  | [optional] 
**last_event_at** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 
**sender** | [**RejectsListResponseInnerSender**](RejectsListResponseInnerSender.md) |  | [optional] 
**subaccount** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rejects_list_response_inner import RejectsListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of RejectsListResponseInner from a JSON string
rejects_list_response_inner_instance = RejectsListResponseInner.from_json(json)
# print the JSON string representation of the object
print(RejectsListResponseInner.to_json())

# convert the object into a dict
rejects_list_response_inner_dict = rejects_list_response_inner_instance.to_dict()
# create an instance of RejectsListResponseInner from a dict
rejects_list_response_inner_from_dict = RejectsListResponseInner.from_dict(rejects_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


