# ModernChargeSummary

Modern charge summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ModernChargeSummaryProperties**](ModernChargeSummaryProperties.md) |  | 
**kind** | **str** | Specifies the kind of charge summary. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.modern_charge_summary import ModernChargeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ModernChargeSummary from a JSON string
modern_charge_summary_instance = ModernChargeSummary.from_json(json)
# print the JSON string representation of the object
print(ModernChargeSummary.to_json())

# convert the object into a dict
modern_charge_summary_dict = modern_charge_summary_instance.to_dict()
# create an instance of ModernChargeSummary from a dict
modern_charge_summary_from_dict = ModernChargeSummary.from_dict(modern_charge_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


