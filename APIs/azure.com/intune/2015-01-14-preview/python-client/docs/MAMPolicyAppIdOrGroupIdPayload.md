# MAMPolicyAppIdOrGroupIdPayload

MAM Policy request body for properties Intune MAM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MAMPolicyAppOrGroupIdProperties**](MAMPolicyAppOrGroupIdProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.mam_policy_app_id_or_group_id_payload import MAMPolicyAppIdOrGroupIdPayload

# TODO update the JSON string below
json = "{}"
# create an instance of MAMPolicyAppIdOrGroupIdPayload from a JSON string
mam_policy_app_id_or_group_id_payload_instance = MAMPolicyAppIdOrGroupIdPayload.from_json(json)
# print the JSON string representation of the object
print(MAMPolicyAppIdOrGroupIdPayload.to_json())

# convert the object into a dict
mam_policy_app_id_or_group_id_payload_dict = mam_policy_app_id_or_group_id_payload_instance.to_dict()
# create an instance of MAMPolicyAppIdOrGroupIdPayload from a dict
mam_policy_app_id_or_group_id_payload_from_dict = MAMPolicyAppIdOrGroupIdPayload.from_dict(mam_policy_app_id_or_group_id_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


