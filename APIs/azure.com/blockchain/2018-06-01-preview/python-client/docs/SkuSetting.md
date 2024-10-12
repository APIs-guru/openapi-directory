# SkuSetting

Sku Setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** | Gets or sets the locations. | [optional] 
**name** | **str** | Gets or sets the Sku name. | [optional] 
**required_features** | **List[str]** | Gets or sets the required features. | [optional] 
**tier** | **str** | Gets or sets the Sku tier. | [optional] 

## Example

```python
from openapi_client.models.sku_setting import SkuSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SkuSetting from a JSON string
sku_setting_instance = SkuSetting.from_json(json)
# print the JSON string representation of the object
print(SkuSetting.to_json())

# convert the object into a dict
sku_setting_dict = sku_setting_instance.to_dict()
# create an instance of SkuSetting from a dict
sku_setting_from_dict = SkuSetting.from_dict(sku_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


