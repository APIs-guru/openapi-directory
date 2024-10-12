# ModernUsageDetail

Modern usage detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ModernUsageDetailProperties**](ModernUsageDetailProperties.md) |  | 
**kind** | **str** | Specifies the kind of usage details. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.modern_usage_detail import ModernUsageDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ModernUsageDetail from a JSON string
modern_usage_detail_instance = ModernUsageDetail.from_json(json)
# print the JSON string representation of the object
print(ModernUsageDetail.to_json())

# convert the object into a dict
modern_usage_detail_dict = modern_usage_detail_instance.to_dict()
# create an instance of ModernUsageDetail from a dict
modern_usage_detail_from_dict = ModernUsageDetail.from_dict(modern_usage_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


