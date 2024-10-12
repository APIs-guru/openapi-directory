# BatchUpdateBasePlanStatesRequest

Request message for BatchUpdateBasePlanStates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateBasePlanStateRequest]**](UpdateBasePlanStateRequest.md) | Required. The update request list of up to 100 elements. All requests must update different base plans. | [optional] 

## Example

```python
from openapi_client.models.batch_update_base_plan_states_request import BatchUpdateBasePlanStatesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateBasePlanStatesRequest from a JSON string
batch_update_base_plan_states_request_instance = BatchUpdateBasePlanStatesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateBasePlanStatesRequest.to_json())

# convert the object into a dict
batch_update_base_plan_states_request_dict = batch_update_base_plan_states_request_instance.to_dict()
# create an instance of BatchUpdateBasePlanStatesRequest from a dict
batch_update_base_plan_states_request_from_dict = BatchUpdateBasePlanStatesRequest.from_dict(batch_update_base_plan_states_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


