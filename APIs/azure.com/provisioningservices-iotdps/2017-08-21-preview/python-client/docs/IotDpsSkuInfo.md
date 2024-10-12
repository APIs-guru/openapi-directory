# IotDpsSkuInfo

List of possible provisoning service SKUs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The number of services of the selected tier allowed in the subscription. | [optional] 
**name** | **str** |  | [optional] 
**tier** | **str** | Pricing tier of the provisioning service. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iot_dps_sku_info import IotDpsSkuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IotDpsSkuInfo from a JSON string
iot_dps_sku_info_instance = IotDpsSkuInfo.from_json(json)
# print the JSON string representation of the object
print(IotDpsSkuInfo.to_json())

# convert the object into a dict
iot_dps_sku_info_dict = iot_dps_sku_info_instance.to_dict()
# create an instance of IotDpsSkuInfo from a dict
iot_dps_sku_info_from_dict = IotDpsSkuInfo.from_dict(iot_dps_sku_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


