# PolicyDelegationSettings

PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam_permission** | **str** | Permission to check in IAM. | [optional] 
**iam_service_name** | **str** | The DNS name of the service (e.g. \&quot;resourcemanager.googleapis.com\&quot;). This should be the domain name part of the full resource names (see https://aip.dev/122#full-resource-names), which is usually the same as IamServiceSpec.service of the service where the resource type is defined. | [optional] 
**policy_name** | [**PolicyName**](PolicyName.md) |  | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_delegation_settings import PolicyDelegationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDelegationSettings from a JSON string
policy_delegation_settings_instance = PolicyDelegationSettings.from_json(json)
# print the JSON string representation of the object
print(PolicyDelegationSettings.to_json())

# convert the object into a dict
policy_delegation_settings_dict = policy_delegation_settings_instance.to_dict()
# create an instance of PolicyDelegationSettings from a dict
policy_delegation_settings_from_dict = PolicyDelegationSettings.from_dict(policy_delegation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


