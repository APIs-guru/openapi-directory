# LegacyUsageDetail

Legacy usage detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LegacyUsageDetailProperties**](LegacyUsageDetailProperties.md) |  | 
**kind** | **str** | Specifies the kind of usage details. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.legacy_usage_detail import LegacyUsageDetail

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyUsageDetail from a JSON string
legacy_usage_detail_instance = LegacyUsageDetail.from_json(json)
# print the JSON string representation of the object
print(LegacyUsageDetail.to_json())

# convert the object into a dict
legacy_usage_detail_dict = legacy_usage_detail_instance.to_dict()
# create an instance of LegacyUsageDetail from a dict
legacy_usage_detail_from_dict = LegacyUsageDetail.from_dict(legacy_usage_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


