# AQHourly


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | City Name | [optional] 
**country_code** | **str** | Country Abbreviation | [optional] 
**data** | [**List[AQHour]**](AQHour.md) |  | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**state_code** | **str** | State Abbreviation | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.aq_hourly import AQHourly

# TODO update the JSON string below
json = "{}"
# create an instance of AQHourly from a JSON string
aq_hourly_instance = AQHourly.from_json(json)
# print the JSON string representation of the object
print(AQHourly.to_json())

# convert the object into a dict
aq_hourly_dict = aq_hourly_instance.to_dict()
# create an instance of AQHourly from a dict
aq_hourly_from_dict = AQHourly.from_dict(aq_hourly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


