# ServiceAccountDelegationInfo

Identity delegation history of an authenticated service account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_email** | **str** | The email address of a Google account. | [optional] 
**principal_subject** | **str** | A string representing the principal_subject associated with the identity. As compared to &#x60;principal_email&#x60;, supports principals that aren&#39;t associated with email addresses, such as third party principals. For most identities, the format will be &#x60;principal://iam.googleapis.com/{identity pool name}/subjects/{subject}&#x60; except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format &#x60;serviceAccount:{identity pool name}[{subject}]&#x60; | [optional] 

## Example

```python
from openapi_client.models.service_account_delegation_info import ServiceAccountDelegationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAccountDelegationInfo from a JSON string
service_account_delegation_info_instance = ServiceAccountDelegationInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceAccountDelegationInfo.to_json())

# convert the object into a dict
service_account_delegation_info_dict = service_account_delegation_info_instance.to_dict()
# create an instance of ServiceAccountDelegationInfo from a dict
service_account_delegation_info_from_dict = ServiceAccountDelegationInfo.from_dict(service_account_delegation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


