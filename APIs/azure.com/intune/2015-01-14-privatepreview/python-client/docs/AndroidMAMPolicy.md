# AndroidMAMPolicy

Android Policy entity for Intune MAM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AndroidMAMPolicyProperties**](AndroidMAMPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.android_mam_policy import AndroidMAMPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidMAMPolicy from a JSON string
android_mam_policy_instance = AndroidMAMPolicy.from_json(json)
# print the JSON string representation of the object
print(AndroidMAMPolicy.to_json())

# convert the object into a dict
android_mam_policy_dict = android_mam_policy_instance.to_dict()
# create an instance of AndroidMAMPolicy from a dict
android_mam_policy_from_dict = AndroidMAMPolicy.from_dict(android_mam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


