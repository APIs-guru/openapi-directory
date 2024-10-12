# AdditionalRegion

Description of an additional API Management resource location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location name of the additional region among Azure Data center regions. | 
**sku_type** | **str** | The SKU type in the location. | 
**sku_unit_count** | **int** | The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location. | [optional] [default to 1]
**static_ips** | **List[str]** | Static IP addresses of the location&#39;s virtual machines. | [optional] [readonly] 
**vpnconfiguration** | [**VirtualNetworkConfiguration**](VirtualNetworkConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.additional_region import AdditionalRegion

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalRegion from a JSON string
additional_region_instance = AdditionalRegion.from_json(json)
# print the JSON string representation of the object
print(AdditionalRegion.to_json())

# convert the object into a dict
additional_region_dict = additional_region_instance.to_dict()
# create an instance of AdditionalRegion from a dict
additional_region_from_dict = AdditionalRegion.from_dict(additional_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


