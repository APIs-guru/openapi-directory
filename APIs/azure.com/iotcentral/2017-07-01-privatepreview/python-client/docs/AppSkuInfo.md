# AppSkuInfo

Information about the SKU of the IoT Central application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the SKU. | 

## Example

```python
from openapi_client.models.app_sku_info import AppSkuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppSkuInfo from a JSON string
app_sku_info_instance = AppSkuInfo.from_json(json)
# print the JSON string representation of the object
print(AppSkuInfo.to_json())

# convert the object into a dict
app_sku_info_dict = app_sku_info_instance.to_dict()
# create an instance of AppSkuInfo from a dict
app_sku_info_from_dict = AppSkuInfo.from_dict(app_sku_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


