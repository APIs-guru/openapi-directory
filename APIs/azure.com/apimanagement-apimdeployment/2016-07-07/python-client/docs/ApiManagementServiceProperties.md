# ApiManagementServiceProperties

Properties of an API Management service resource description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_locations** | [**List[AdditionalRegion]**](AdditionalRegion.md) | Additional datacenter locations of the API Management service. | [optional] 
**addresser_email** | **str** | Addresser email. | [optional] 
**created_at_utc** | **datetime** | Creation UTC date of the API Management service.The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard. | [optional] [readonly] 
**custom_properties** | **Dict[str, str]** | Custom properties of the API Management service, like disabling TLS 1.0. | [optional] 
**hostname_configurations** | [**List[HostnameConfiguration]**](HostnameConfiguration.md) | Custom hostname configuration of the API Management service. | [optional] 
**management_api_url** | **str** | Management API endpoint URL of the API Management service. | [optional] [readonly] 
**portal_url** | **str** | Publisher portal endpoint Url of the API Management service. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted. | [optional] [readonly] 
**publisher_email** | **str** | Publisher email. | 
**publisher_name** | **str** | Publisher name. | 
**runtime_url** | **str** | Proxy endpoint URL of the API Management service. | [optional] [readonly] 
**scm_url** | **str** | SCM endpoint URL of the API Management service. | [optional] [readonly] 
**static_ips** | **List[str]** | Static IP addresses of the API Management service virtual machines. Available only for Standard and Premium SKU. | [optional] [readonly] 
**target_provisioning_state** | **str** | The provisioning state of the API Management service, which is targeted by the long running operation started on the service. | [optional] [readonly] 
**vpn_type** | **str** | The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only. | [optional] [default to 'None']
**vpnconfiguration** | [**VirtualNetworkConfiguration**](VirtualNetworkConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_management_service_properties import ApiManagementServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceProperties from a JSON string
api_management_service_properties_instance = ApiManagementServiceProperties.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceProperties.to_json())

# convert the object into a dict
api_management_service_properties_dict = api_management_service_properties_instance.to_dict()
# create an instance of ApiManagementServiceProperties from a dict
api_management_service_properties_from_dict = ApiManagementServiceProperties.from_dict(api_management_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


