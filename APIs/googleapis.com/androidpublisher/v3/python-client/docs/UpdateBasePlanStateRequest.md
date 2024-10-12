# UpdateBasePlanStateRequest

Request message to update the state of a subscription base plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activate_base_plan_request** | [**ActivateBasePlanRequest**](ActivateBasePlanRequest.md) |  | [optional] 
**deactivate_base_plan_request** | [**DeactivateBasePlanRequest**](DeactivateBasePlanRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_base_plan_state_request import UpdateBasePlanStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBasePlanStateRequest from a JSON string
update_base_plan_state_request_instance = UpdateBasePlanStateRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBasePlanStateRequest.to_json())

# convert the object into a dict
update_base_plan_state_request_dict = update_base_plan_state_request_instance.to_dict()
# create an instance of UpdateBasePlanStateRequest from a dict
update_base_plan_state_request_from_dict = UpdateBasePlanStateRequest.from_dict(update_base_plan_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


