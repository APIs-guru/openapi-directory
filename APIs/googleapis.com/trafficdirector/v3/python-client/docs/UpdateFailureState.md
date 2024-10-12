# UpdateFailureState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Details about the last failed update attempt. | [optional] 
**failed_configuration** | **Dict[str, object]** | What the component configuration would have been if the update had succeeded. This field may not be populated by xDS clients due to storage overhead. | [optional] 
**last_update_attempt** | **str** | Time of the latest failed update attempt. | [optional] 
**version_info** | **str** | This is the version of the rejected resource. [#not-implemented-hide:] | [optional] 

## Example

```python
from openapi_client.models.update_failure_state import UpdateFailureState

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFailureState from a JSON string
update_failure_state_instance = UpdateFailureState.from_json(json)
# print the JSON string representation of the object
print(UpdateFailureState.to_json())

# convert the object into a dict
update_failure_state_dict = update_failure_state_instance.to_dict()
# create an instance of UpdateFailureState from a dict
update_failure_state_from_dict = UpdateFailureState.from_dict(update_failure_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


