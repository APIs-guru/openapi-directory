# SecurityProfile

The security profile which contains Ssh public key for the HDInsight cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aadds_resource_id** | **str** | The resource ID of the user&#39;s Azure Active Directory Domain Service. | [optional] 
**cluster_users_group_dns** | **List[str]** | Optional. The Distinguished Names for cluster user groups | [optional] 
**directory_type** | **str** | The directory type. | [optional] 
**domain** | **str** | The organization&#39;s active directory domain. | [optional] 
**domain_user_password** | **str** | The domain admin password. | [optional] 
**domain_username** | **str** | The domain user account that will have admin privileges on the cluster. | [optional] 
**ldaps_urls** | **List[str]** | The LDAPS protocol URLs to communicate with the Active Directory. | [optional] 
**msi_resource_id** | **str** | User assigned identity that has permissions to read and create cluster-related artifacts in the user&#39;s AADDS. | [optional] 
**organizational_unit_dn** | **str** | The organizational unit within the Active Directory to place the cluster and service accounts. | [optional] 

## Example

```python
from openapi_client.models.security_profile import SecurityProfile

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityProfile from a JSON string
security_profile_instance = SecurityProfile.from_json(json)
# print the JSON string representation of the object
print(SecurityProfile.to_json())

# convert the object into a dict
security_profile_dict = security_profile_instance.to_dict()
# create an instance of SecurityProfile from a dict
security_profile_from_dict = SecurityProfile.from_dict(security_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


