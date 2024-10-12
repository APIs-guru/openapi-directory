# ApprovalConfig

ApprovalConfig describes configuration for manual approval of a build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. | [optional] 

## Example

```python
from openapi_client.models.approval_config import ApprovalConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApprovalConfig from a JSON string
approval_config_instance = ApprovalConfig.from_json(json)
# print the JSON string representation of the object
print(ApprovalConfig.to_json())

# convert the object into a dict
approval_config_dict = approval_config_instance.to_dict()
# create an instance of ApprovalConfig from a dict
approval_config_from_dict = ApprovalConfig.from_dict(approval_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


