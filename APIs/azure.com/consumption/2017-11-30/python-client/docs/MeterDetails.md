# MeterDetails

The properties of the meter detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter_category** | **str** | The category of the meter, for example, &#39;Cloud services&#39;, &#39;Networking&#39;, etc.. | [optional] [readonly] 
**meter_location** | **str** | The location in which the Azure service is available. | [optional] [readonly] 
**meter_name** | **str** | The name of the meter, within the given meter category | [optional] [readonly] 
**meter_sub_category** | **str** | The subcategory of the meter, for example, &#39;A6 Cloud services&#39;, &#39;ExpressRoute (IXP)&#39;, etc.. | [optional] [readonly] 
**pretax_standard_rate** | **float** | The pretax listing price. | [optional] [readonly] 
**total_included_quantity** | **float** | The total included quantity associated with the offer. | [optional] [readonly] 
**unit** | **str** | The unit in which the meter consumption is charged, for example, &#39;Hours&#39;, &#39;GB&#39;, etc. | [optional] [readonly] 

## Example

```python
from openapi_client.models.meter_details import MeterDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MeterDetails from a JSON string
meter_details_instance = MeterDetails.from_json(json)
# print the JSON string representation of the object
print(MeterDetails.to_json())

# convert the object into a dict
meter_details_dict = meter_details_instance.to_dict()
# create an instance of MeterDetails from a dict
meter_details_from_dict = MeterDetails.from_dict(meter_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


