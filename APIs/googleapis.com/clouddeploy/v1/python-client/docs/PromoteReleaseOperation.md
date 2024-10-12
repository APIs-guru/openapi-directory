# PromoteReleaseOperation

Contains the information of an automated promote-release operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phase** | **str** | Output only. The starting phase of the rollout created by this operation. | [optional] [readonly] 
**rollout** | **str** | Output only. The name of the rollout that initiates the &#x60;AutomationRun&#x60;. | [optional] [readonly] 
**target_id** | **str** | Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name. | [optional] [readonly] 
**wait** | **str** | Output only. How long the operation will be paused. | [optional] [readonly] 

## Example

```python
from openapi_client.models.promote_release_operation import PromoteReleaseOperation

# TODO update the JSON string below
json = "{}"
# create an instance of PromoteReleaseOperation from a JSON string
promote_release_operation_instance = PromoteReleaseOperation.from_json(json)
# print the JSON string representation of the object
print(PromoteReleaseOperation.to_json())

# convert the object into a dict
promote_release_operation_dict = promote_release_operation_instance.to_dict()
# create an instance of PromoteReleaseOperation from a dict
promote_release_operation_from_dict = PromoteReleaseOperation.from_dict(promote_release_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


