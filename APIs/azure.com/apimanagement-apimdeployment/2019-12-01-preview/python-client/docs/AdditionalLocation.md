# AdditionalLocation

Description of an additional API Management resource location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_gateway** | **bool** | Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in this additional location. | [optional] [default to False]
**gateway_regional_url** | **str** | Gateway URL of the API Management service in the Region. | [optional] [readonly] 
**location** | **str** | The location name of the additional region among Azure Data center regions. | 
**private_ip_addresses** | **List[str]** | Private Static Load Balanced IP addresses of the API Management service which is deployed in an Internal Virtual Network in a particular additional location. Available only for Basic, Standard and Premium SKU. | [optional] [readonly] 
**public_ip_addresses** | **List[str]** | Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU. | [optional] [readonly] 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | 
**virtual_network_configuration** | [**VirtualNetworkConfiguration**](VirtualNetworkConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.additional_location import AdditionalLocation

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalLocation from a JSON string
additional_location_instance = AdditionalLocation.from_json(json)
# print the JSON string representation of the object
print(AdditionalLocation.to_json())

# convert the object into a dict
additional_location_dict = additional_location_instance.to_dict()
# create an instance of AdditionalLocation from a dict
additional_location_from_dict = AdditionalLocation.from_dict(additional_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


