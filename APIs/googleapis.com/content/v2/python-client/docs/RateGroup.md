# RateGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_shipping_labels** | **List[str]** | A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required. | [optional] 
**carrier_rates** | [**List[CarrierRate]**](CarrierRate.md) | A list of carrier rates that can be referred to by &#x60;mainTable&#x60; or &#x60;singleValue&#x60;. | [optional] 
**main_table** | [**Table**](Table.md) |  | [optional] 
**name** | **str** | Name of the rate group. Optional. If set has to be unique within shipping service. | [optional] 
**single_value** | [**Value**](Value.md) |  | [optional] 
**subtables** | [**List[Table]**](Table.md) | A list of subtables referred to by &#x60;mainTable&#x60;. Can only be set if &#x60;mainTable&#x60; is set. | [optional] 

## Example

```python
from openapi_client.models.rate_group import RateGroup

# TODO update the JSON string below
json = "{}"
# create an instance of RateGroup from a JSON string
rate_group_instance = RateGroup.from_json(json)
# print the JSON string representation of the object
print(RateGroup.to_json())

# convert the object into a dict
rate_group_dict = rate_group_instance.to_dict()
# create an instance of RateGroup from a dict
rate_group_from_dict = RateGroup.from_dict(rate_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


