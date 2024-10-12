# ApiManagementServiceUpdateProperties

Properties of an API Management service resource description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_email** | **str** | Publisher email. | [optional] 
**publisher_name** | **str** | Publisher name. | [optional] 
**additional_locations** | [**List[AdditionalLocation]**](AdditionalLocation.md) | Additional datacenter locations of the API Management service. | [optional] 
**certificates** | [**List[CertificateConfiguration]**](CertificateConfiguration.md) | List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10. | [optional] 
**created_at_utc** | **datetime** | Creation UTC date of the API Management service.The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard. | [optional] [readonly] 
**custom_properties** | **Dict[str, str]** | Custom properties of the API Management service. Setting &#x60;Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168&#x60; will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2). Setting &#x60;Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11&#x60; can be used to disable just TLS 1.1 and setting &#x60;Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10&#x60; can be used to disable TLS 1.0 on an API Management service. | [optional] 
**gateway_regional_url** | **str** | Gateway URL of the API Management service in the Default Region. | [optional] [readonly] 
**gateway_url** | **str** | Gateway URL of the API Management service. | [optional] [readonly] 
**hostname_configurations** | [**List[HostnameConfiguration]**](HostnameConfiguration.md) | Custom hostname configuration of the API Management service. | [optional] 
**management_api_url** | **str** | Management API endpoint URL of the API Management service. | [optional] [readonly] 
**notification_sender_email** | **str** | Email address from which the notification will be sent. | [optional] 
**portal_url** | **str** | Publisher portal endpoint Url of the API Management service. | [optional] [readonly] 
**private_ip_addresses** | **List[str]** | Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard and Premium SKU. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted. | [optional] [readonly] 
**public_ip_addresses** | **List[str]** | Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard and Premium SKU. | [optional] [readonly] 
**scm_url** | **str** | SCM endpoint URL of the API Management service. | [optional] [readonly] 
**target_provisioning_state** | **str** | The provisioning state of the API Management service, which is targeted by the long running operation started on the service. | [optional] [readonly] 
**virtual_network_configuration** | [**VirtualNetworkConfiguration**](VirtualNetworkConfiguration.md) |  | [optional] 
**virtual_network_type** | **str** | The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only. | [optional] [default to 'None']

## Example

```python
from openapi_client.models.api_management_service_update_properties import ApiManagementServiceUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceUpdateProperties from a JSON string
api_management_service_update_properties_instance = ApiManagementServiceUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceUpdateProperties.to_json())

# convert the object into a dict
api_management_service_update_properties_dict = api_management_service_update_properties_instance.to_dict()
# create an instance of ApiManagementServiceUpdateProperties from a dict
api_management_service_update_properties_from_dict = ApiManagementServiceUpdateProperties.from_dict(api_management_service_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


