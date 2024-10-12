# BatchUpdateBasePlanStatesResponse

Response message for BatchUpdateBasePlanStates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptions** | [**List[Subscription]**](Subscription.md) | The list of updated subscriptions. This list will match the requests one to one, in the same order. | [optional] 

## Example

```python
from openapi_client.models.batch_update_base_plan_states_response import BatchUpdateBasePlanStatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateBasePlanStatesResponse from a JSON string
batch_update_base_plan_states_response_instance = BatchUpdateBasePlanStatesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateBasePlanStatesResponse.to_json())

# convert the object into a dict
batch_update_base_plan_states_response_dict = batch_update_base_plan_states_response_instance.to_dict()
# create an instance of BatchUpdateBasePlanStatesResponse from a dict
batch_update_base_plan_states_response_from_dict = BatchUpdateBasePlanStatesResponse.from_dict(batch_update_base_plan_states_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


