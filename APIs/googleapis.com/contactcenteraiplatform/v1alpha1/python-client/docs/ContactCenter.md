# ContactCenter

Message describing ContactCenter object Next ID: 20

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user** | [**AdminUser**](AdminUser.md) |  | [optional] 
**ccaip_managed_users** | **bool** | Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity | [optional] 
**create_time** | **str** | Output only. [Output only] Create time stamp | [optional] [readonly] 
**customer_domain_prefix** | **str** | Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). | [optional] 
**display_name** | **str** | Required. A user friendly name for the ContactCenter. | [optional] 
**instance_config** | [**InstanceConfig**](InstanceConfig.md) |  | [optional] 
**kms_key** | **str** | Immutable. The KMS key name to encrypt the user input (&#x60;ContactCenter&#x60;). | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs | [optional] 
**name** | **str** | name of resource | [optional] 
**private_components** | **List[str]** | Output only. A list of UJET components that should be privately accessed. This field is set by reading settings from the data plane. For more information about the format of the component please refer to go/ccaip-vpc-sc-org-policy. This field is must be fully populated only for Create/Update resource operations. The main use case for this field is OrgPolicy checks via CPE. | [optional] [readonly] 
**saml_params** | [**SAMLParams**](SAMLParams.md) |  | [optional] 
**state** | **str** | Output only. The state of this contact center. | [optional] [readonly] 
**update_time** | **str** | Output only. [Output only] Update time stamp | [optional] [readonly] 
**uris** | [**URIs**](URIs.md) |  | [optional] 
**user_email** | **str** | Optional. Email address of the first admin user. | [optional] 

## Example

```python
from openapi_client.models.contact_center import ContactCenter

# TODO update the JSON string below
json = "{}"
# create an instance of ContactCenter from a JSON string
contact_center_instance = ContactCenter.from_json(json)
# print the JSON string representation of the object
print(ContactCenter.to_json())

# convert the object into a dict
contact_center_dict = contact_center_instance.to_dict()
# create an instance of ContactCenter from a dict
contact_center_from_dict = ContactCenter.from_dict(contact_center_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


