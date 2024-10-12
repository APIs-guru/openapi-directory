# EventFrameLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **str** |  | [optional] 
**attributes** | **str** |  | [optional] 
**categories** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**default_attribute** | **str** |  | [optional] 
**end_value** | **str** |  | [optional] 
**event_frames** | **str** |  | [optional] 
**interpolated_data** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**plot_data** | **str** |  | [optional] 
**primary_referenced_element** | **str** |  | [optional] 
**recorded_data** | **str** |  | [optional] 
**referenced_elements** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**summary_data** | **str** |  | [optional] 
**template** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.event_frame_links import EventFrameLinks

# TODO update the JSON string below
json = "{}"
# create an instance of EventFrameLinks from a JSON string
event_frame_links_instance = EventFrameLinks.from_json(json)
# print the JSON string representation of the object
print(EventFrameLinks.to_json())

# convert the object into a dict
event_frame_links_dict = event_frame_links_instance.to_dict()
# create an instance of EventFrameLinks from a dict
event_frame_links_from_dict = EventFrameLinks.from_dict(event_frame_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


