# DigitalTwinsSkuInfo

Information about the SKU of the DigitalTwinsInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the SKU. | 

## Example

```python
from openapi_client.models.digital_twins_sku_info import DigitalTwinsSkuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsSkuInfo from a JSON string
digital_twins_sku_info_instance = DigitalTwinsSkuInfo.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsSkuInfo.to_json())

# convert the object into a dict
digital_twins_sku_info_dict = digital_twins_sku_info_instance.to_dict()
# create an instance of DigitalTwinsSkuInfo from a dict
digital_twins_sku_info_from_dict = DigitalTwinsSkuInfo.from_dict(digital_twins_sku_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


