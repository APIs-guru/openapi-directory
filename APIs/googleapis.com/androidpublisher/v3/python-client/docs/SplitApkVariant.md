# SplitApkVariant

Variant is a group of APKs that covers a part of the device configuration space. APKs from multiple variants are never combined on one device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apk_set** | [**List[ApkSet]**](ApkSet.md) | Set of APKs, one set per module. | [optional] 
**targeting** | [**VariantTargeting**](VariantTargeting.md) |  | [optional] 
**variant_number** | **int** | Number of the variant, starting at 0 (unless overridden). A device will receive APKs from the first variant that matches the device configuration, with higher variant numbers having priority over lower variant numbers. | [optional] 

## Example

```python
from openapi_client.models.split_apk_variant import SplitApkVariant

# TODO update the JSON string below
json = "{}"
# create an instance of SplitApkVariant from a JSON string
split_apk_variant_instance = SplitApkVariant.from_json(json)
# print the JSON string representation of the object
print(SplitApkVariant.to_json())

# convert the object into a dict
split_apk_variant_dict = split_apk_variant_instance.to_dict()
# create an instance of SplitApkVariant from a dict
split_apk_variant_from_dict = SplitApkVariant.from_dict(split_apk_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


