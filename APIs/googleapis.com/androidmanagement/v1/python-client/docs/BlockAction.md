# BlockAction

An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_after_days** | **int** | Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays. | [optional] 
**block_scope** | **str** | Specifies the scope of this BlockAction. Only applicable to devices that are company-owned. | [optional] 

## Example

```python
from openapi_client.models.block_action import BlockAction

# TODO update the JSON string below
json = "{}"
# create an instance of BlockAction from a JSON string
block_action_instance = BlockAction.from_json(json)
# print the JSON string representation of the object
print(BlockAction.to_json())

# convert the object into a dict
block_action_dict = block_action_instance.to_dict()
# create an instance of BlockAction from a dict
block_action_from_dict = BlockAction.from_dict(block_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


