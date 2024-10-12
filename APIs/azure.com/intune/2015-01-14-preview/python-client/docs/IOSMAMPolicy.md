# IOSMAMPolicy

iOS Policy entity for Intune MAM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IOSMAMPolicyProperties**](IOSMAMPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.iosmam_policy import IOSMAMPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IOSMAMPolicy from a JSON string
iosmam_policy_instance = IOSMAMPolicy.from_json(json)
# print the JSON string representation of the object
print(IOSMAMPolicy.to_json())

# convert the object into a dict
iosmam_policy_dict = iosmam_policy_instance.to_dict()
# create an instance of IOSMAMPolicy from a dict
iosmam_policy_from_dict = IOSMAMPolicy.from_dict(iosmam_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


