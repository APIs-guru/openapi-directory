# MeterInfo

Detailed information about the meter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_date** | **datetime** | Indicates the date from which the meter rate is effective. | [optional] 
**included_quantity** | **float** | The resource quantity that is included in the offer at no cost. Consumption beyond this quantity will be charged. | [optional] 
**meter_category** | **str** | The category of the meter, e.g., &#39;Cloud services&#39;, &#39;Networking&#39;, etc.. | [optional] 
**meter_id** | **str** | The unique identifier of the resource. | [optional] 
**meter_name** | **str** | The name of the meter, within the given meter category | [optional] 
**meter_rates** | **Dict[str, float]** | The list of key/value pairs for the meter rates, in the format &#39;key&#39;:&#39;value&#39; where key &#x3D; the meter quantity, and value &#x3D; the corresponding price | [optional] 
**meter_region** | **str** | The region in which the Azure service is available. | [optional] 
**meter_sub_category** | **str** | The subcategory of the meter, e.g., &#39;A6 Cloud services&#39;, &#39;ExpressRoute (IXP)&#39;, etc.. | [optional] 
**meter_tags** | **List[str]** | Provides additional meter data. &#39;Third Party&#39; indicates a meter with no discount. Blanks indicate First Party. | [optional] 
**unit** | **str** | The unit in which the meter consumption is charged, e.g., &#39;Hours&#39;, &#39;GB&#39;, etc. | [optional] 

## Example

```python
from openapi_client.models.meter_info import MeterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MeterInfo from a JSON string
meter_info_instance = MeterInfo.from_json(json)
# print the JSON string representation of the object
print(MeterInfo.to_json())

# convert the object into a dict
meter_info_dict = meter_info_instance.to_dict()
# create an instance of MeterInfo from a dict
meter_info_from_dict = MeterInfo.from_dict(meter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


