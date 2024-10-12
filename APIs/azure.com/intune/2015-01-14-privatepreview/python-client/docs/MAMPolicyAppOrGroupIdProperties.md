# MAMPolicyAppOrGroupIdProperties

Android Policy request body for Intune MAM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 

## Example

```python
from openapi_client.models.mam_policy_app_or_group_id_properties import MAMPolicyAppOrGroupIdProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MAMPolicyAppOrGroupIdProperties from a JSON string
mam_policy_app_or_group_id_properties_instance = MAMPolicyAppOrGroupIdProperties.from_json(json)
# print the JSON string representation of the object
print(MAMPolicyAppOrGroupIdProperties.to_json())

# convert the object into a dict
mam_policy_app_or_group_id_properties_dict = mam_policy_app_or_group_id_properties_instance.to_dict()
# create an instance of MAMPolicyAppOrGroupIdProperties from a dict
mam_policy_app_or_group_id_properties_from_dict = MAMPolicyAppOrGroupIdProperties.from_dict(mam_policy_app_or_group_id_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


