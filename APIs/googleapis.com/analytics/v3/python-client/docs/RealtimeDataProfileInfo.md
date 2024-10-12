# RealtimeDataProfileInfo

Information for the view (profile), for which the real time data was requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this view (profile) belongs. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this view (profile) belongs. | [optional] 
**profile_id** | **str** | View (Profile) ID. | [optional] 
**profile_name** | **str** | View (Profile) name. | [optional] 
**table_id** | **str** | Table ID for view (profile). | [optional] 
**web_property_id** | **str** | Web Property ID to which this view (profile) belongs. | [optional] 

## Example

```python
from openapi_client.models.realtime_data_profile_info import RealtimeDataProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RealtimeDataProfileInfo from a JSON string
realtime_data_profile_info_instance = RealtimeDataProfileInfo.from_json(json)
# print the JSON string representation of the object
print(RealtimeDataProfileInfo.to_json())

# convert the object into a dict
realtime_data_profile_info_dict = realtime_data_profile_info_instance.to_dict()
# create an instance of RealtimeDataProfileInfo from a dict
realtime_data_profile_info_from_dict = RealtimeDataProfileInfo.from_dict(realtime_data_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


