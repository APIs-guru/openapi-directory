# AQCurrentGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | City Name | [optional] 
**country_code** | **str** | Country Abbreviation | [optional] 
**data** | [**List[AQCurrent]**](AQCurrent.md) |  | [optional] 
**lat** | **str** | Latitude | [optional] 
**lon** | **str** | Longitude | [optional] 
**state_code** | **str** | State Abbreviation | [optional] 
**timezone** | **str** | Local IANA time zone | [optional] 

## Example

```python
from openapi_client.models.aq_current_group import AQCurrentGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AQCurrentGroup from a JSON string
aq_current_group_instance = AQCurrentGroup.from_json(json)
# print the JSON string representation of the object
print(AQCurrentGroup.to_json())

# convert the object into a dict
aq_current_group_dict = aq_current_group_instance.to_dict()
# create an instance of AQCurrentGroup from a dict
aq_current_group_from_dict = AQCurrentGroup.from_dict(aq_current_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


