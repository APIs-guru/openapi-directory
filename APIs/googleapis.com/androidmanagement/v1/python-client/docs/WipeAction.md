# WipeAction

An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preserve_frp** | **bool** | Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles. | [optional] 
**wipe_after_days** | **int** | Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays. | [optional] 

## Example

```python
from openapi_client.models.wipe_action import WipeAction

# TODO update the JSON string below
json = "{}"
# create an instance of WipeAction from a JSON string
wipe_action_instance = WipeAction.from_json(json)
# print the JSON string representation of the object
print(WipeAction.to_json())

# convert the object into a dict
wipe_action_dict = wipe_action_instance.to_dict()
# create an instance of WipeAction from a dict
wipe_action_from_dict = WipeAction.from_dict(wipe_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


