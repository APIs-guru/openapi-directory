# ChargeSummary

A charge summary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Specifies the kind of charge summary. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charge_summary import ChargeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSummary from a JSON string
charge_summary_instance = ChargeSummary.from_json(json)
# print the JSON string representation of the object
print(ChargeSummary.to_json())

# convert the object into a dict
charge_summary_dict = charge_summary_instance.to_dict()
# create an instance of ChargeSummary from a dict
charge_summary_from_dict = ChargeSummary.from_dict(charge_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


