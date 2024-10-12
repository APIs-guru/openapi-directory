# MeterDetailsResponse

The properties of the meter detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter_category** | **str** | The category of the meter, for example, &#39;Cloud services&#39;, &#39;Networking&#39;, etc.. | [optional] [readonly] 
**meter_name** | **str** | The name of the meter, within the given meter category | [optional] [readonly] 
**meter_sub_category** | **str** | The subcategory of the meter, for example, &#39;A6 Cloud services&#39;, &#39;ExpressRoute (IXP)&#39;, etc.. | [optional] [readonly] 
**service_family** | **str** | The service family. | [optional] [readonly] 
**unit_of_measure** | **str** | The unit in which the meter consumption is charged, for example, &#39;Hours&#39;, &#39;GB&#39;, etc. | [optional] [readonly] 

## Example

```python
from openapi_client.models.meter_details_response import MeterDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MeterDetailsResponse from a JSON string
meter_details_response_instance = MeterDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(MeterDetailsResponse.to_json())

# convert the object into a dict
meter_details_response_dict = meter_details_response_instance.to_dict()
# create an instance of MeterDetailsResponse from a dict
meter_details_response_from_dict = MeterDetailsResponse.from_dict(meter_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


