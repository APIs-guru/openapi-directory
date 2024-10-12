# AppServicePlansGetVnetGateway200ResponseProperties

VnetGateway resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vnet_name** | **str** | The Virtual Network name. | [optional] 
**vpn_package_uri** | **str** | The URI where the VPN package can be downloaded. | 

## Example

```python
from openapi_client.models.app_service_plans_get_vnet_gateway200_response_properties import AppServicePlansGetVnetGateway200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansGetVnetGateway200ResponseProperties from a JSON string
app_service_plans_get_vnet_gateway200_response_properties_instance = AppServicePlansGetVnetGateway200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansGetVnetGateway200ResponseProperties.to_json())

# convert the object into a dict
app_service_plans_get_vnet_gateway200_response_properties_dict = app_service_plans_get_vnet_gateway200_response_properties_instance.to_dict()
# create an instance of AppServicePlansGetVnetGateway200ResponseProperties from a dict
app_service_plans_get_vnet_gateway200_response_properties_from_dict = AppServicePlansGetVnetGateway200ResponseProperties.from_dict(app_service_plans_get_vnet_gateway200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


