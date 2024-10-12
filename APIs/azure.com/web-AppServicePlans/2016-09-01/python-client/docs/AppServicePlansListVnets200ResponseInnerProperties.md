# AppServicePlansListVnets200ResponseInnerProperties

VnetInfo resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_blob** | **bytearray** | A certificate file (.cer) blob containing the public key of the private key used to authenticate a  Point-To-Site VPN connection. | [optional] 
**cert_thumbprint** | **str** | The client certificate thumbprint. | [optional] [readonly] 
**dns_servers** | **str** | DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses. | [optional] 
**resync_required** | **bool** | &lt;code&gt;true&lt;/code&gt; if a resync is required; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] [readonly] 
**routes** | [**List[AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner]**](AppServicePlansListVnets200ResponseInnerPropertiesRoutesInner.md) | The routes that this Virtual Network connection uses. | [optional] [readonly] 
**vnet_resource_id** | **str** | The Virtual Network&#39;s resource ID. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_vnets200_response_inner_properties import AppServicePlansListVnets200ResponseInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListVnets200ResponseInnerProperties from a JSON string
app_service_plans_list_vnets200_response_inner_properties_instance = AppServicePlansListVnets200ResponseInnerProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListVnets200ResponseInnerProperties.to_json())

# convert the object into a dict
app_service_plans_list_vnets200_response_inner_properties_dict = app_service_plans_list_vnets200_response_inner_properties_instance.to_dict()
# create an instance of AppServicePlansListVnets200ResponseInnerProperties from a dict
app_service_plans_list_vnets200_response_inner_properties_from_dict = AppServicePlansListVnets200ResponseInnerProperties.from_dict(app_service_plans_list_vnets200_response_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


