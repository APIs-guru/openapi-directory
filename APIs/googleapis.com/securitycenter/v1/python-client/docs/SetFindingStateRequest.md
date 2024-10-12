# SetFindingStateRequest

Request message for updating a finding's state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **str** | Required. The time at which the updated state takes effect. | [optional] 
**state** | **str** | Required. The desired State of the finding. | [optional] 

## Example

```python
from openapi_client.models.set_finding_state_request import SetFindingStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetFindingStateRequest from a JSON string
set_finding_state_request_instance = SetFindingStateRequest.from_json(json)
# print the JSON string representation of the object
print(SetFindingStateRequest.to_json())

# convert the object into a dict
set_finding_state_request_dict = set_finding_state_request_instance.to_dict()
# create an instance of SetFindingStateRequest from a dict
set_finding_state_request_from_dict = SetFindingStateRequest.from_dict(set_finding_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


