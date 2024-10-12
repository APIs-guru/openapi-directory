# IotHubSkuDescription

SKU properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**IotHubCapacity**](IotHubCapacity.md) |  | 
**resource_type** | **str** | The type of the resource. | [optional] [readonly] 
**sku** | [**IotHubSkuInfo**](IotHubSkuInfo.md) |  | 

## Example

```python
from openapi_client.models.iot_hub_sku_description import IotHubSkuDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubSkuDescription from a JSON string
iot_hub_sku_description_instance = IotHubSkuDescription.from_json(json)
# print the JSON string representation of the object
print(IotHubSkuDescription.to_json())

# convert the object into a dict
iot_hub_sku_description_dict = iot_hub_sku_description_instance.to_dict()
# create an instance of IotHubSkuDescription from a dict
iot_hub_sku_description_from_dict = IotHubSkuDescription.from_dict(iot_hub_sku_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


