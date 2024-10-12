# IotHubSkuInfo

Information about the SKU of the IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits. | 
**name** | **str** | The name of the SKU. | 
**tier** | **str** | The billing tier for the IoT hub. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_hub_sku_info import IotHubSkuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubSkuInfo from a JSON string
iot_hub_sku_info_instance = IotHubSkuInfo.from_json(json)
# print the JSON string representation of the object
print(IotHubSkuInfo.to_json())

# convert the object into a dict
iot_hub_sku_info_dict = iot_hub_sku_info_instance.to_dict()
# create an instance of IotHubSkuInfo from a dict
iot_hub_sku_info_from_dict = IotHubSkuInfo.from_dict(iot_hub_sku_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


