# StateReason

The reason a spoke is inactive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code associated with this reason. | [optional] 
**message** | **str** | Human-readable details about this reason. | [optional] 
**user_details** | **str** | Additional information provided by the user in the RejectSpoke call. | [optional] 

## Example

```python
from openapi_client.models.state_reason import StateReason

# TODO update the JSON string below
json = "{}"
# create an instance of StateReason from a JSON string
state_reason_instance = StateReason.from_json(json)
# print the JSON string representation of the object
print(StateReason.to_json())

# convert the object into a dict
state_reason_dict = state_reason_instance.to_dict()
# create an instance of StateReason from a dict
state_reason_from_dict = StateReason.from_dict(state_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


