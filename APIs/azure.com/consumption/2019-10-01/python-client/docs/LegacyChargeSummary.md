# LegacyChargeSummary

Legacy charge summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LegacyChargeSummaryProperties**](LegacyChargeSummaryProperties.md) |  | 
**kind** | **str** | Specifies the kind of charge summary. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.legacy_charge_summary import LegacyChargeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyChargeSummary from a JSON string
legacy_charge_summary_instance = LegacyChargeSummary.from_json(json)
# print the JSON string representation of the object
print(LegacyChargeSummary.to_json())

# convert the object into a dict
legacy_charge_summary_dict = legacy_charge_summary_instance.to_dict()
# create an instance of LegacyChargeSummary from a dict
legacy_charge_summary_from_dict = LegacyChargeSummary.from_dict(legacy_charge_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


