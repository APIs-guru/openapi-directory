# GenericProtectionPolicy

Azure VM (Mercury) workload-specific backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_name** | **str** | Name of this policy&#39;s fabric. | [optional] 
**sub_protection_policy** | [**List[SubProtectionPolicy]**](SubProtectionPolicy.md) | List of sub-protection policies which includes schedule and retention | [optional] 
**time_zone** | **str** | TimeZone optional input as string. For example: TimeZone &#x3D; \&quot;Pacific Standard Time\&quot;. | [optional] 

## Example

```python
from openapi_client.models.generic_protection_policy import GenericProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GenericProtectionPolicy from a JSON string
generic_protection_policy_instance = GenericProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(GenericProtectionPolicy.to_json())

# convert the object into a dict
generic_protection_policy_dict = generic_protection_policy_instance.to_dict()
# create an instance of GenericProtectionPolicy from a dict
generic_protection_policy_from_dict = GenericProtectionPolicy.from_dict(generic_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


