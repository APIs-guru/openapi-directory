# BuildApproval

BuildApproval describes a build's approval configuration, state, and result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ApprovalConfig**](ApprovalConfig.md) |  | [optional] 
**result** | [**ApprovalResult**](ApprovalResult.md) |  | [optional] 
**state** | **str** | Output only. The state of this build&#39;s approval. | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_approval import BuildApproval

# TODO update the JSON string below
json = "{}"
# create an instance of BuildApproval from a JSON string
build_approval_instance = BuildApproval.from_json(json)
# print the JSON string representation of the object
print(BuildApproval.to_json())

# convert the object into a dict
build_approval_dict = build_approval_instance.to_dict()
# create an instance of BuildApproval from a dict
build_approval_from_dict = BuildApproval.from_dict(build_approval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


