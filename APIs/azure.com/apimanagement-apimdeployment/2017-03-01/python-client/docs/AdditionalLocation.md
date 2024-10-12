# AdditionalLocation

Description of an additional API Management resource location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_regional_url** | **str** | Gateway URL of the API Management service in the Region. | [optional] [readonly] 
**location** | **str** | The location name of the additional region among Azure Data center regions. | 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | 
**static_ips** | **List[str]** | Static IP addresses of the location&#39;s virtual machines. | [optional] [readonly] 
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


