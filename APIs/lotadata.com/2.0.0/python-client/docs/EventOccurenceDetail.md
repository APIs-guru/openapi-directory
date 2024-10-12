# EventOccurenceDetail

Event Occurrence Detail limited to requested fieldset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique event id | [optional] 
**type** | **str** | Type of occurrence. You will usually see Organized as the type for most events. While Virtual events will get their own Virtual type. | [optional] 
**activity** | [**List[FeatureReference]**](FeatureReference.md) | Associated ActivityType entries | [optional] 
**ambience** | [**List[FeatureReference]**](FeatureReference.md) | expected mood and feel of the event | [optional] 
**at** | [**PlaceReference**](PlaceReference.md) |  | [optional] 
**away_team** | [**FeatureReference**](FeatureReference.md) |  | [optional] 
**category** | [**List[FeatureReference]**](FeatureReference.md) | Associated EventCategory. May be multiple, such as Charity Music event | [optional] 
**contact_point** | [**ContactDetail**](ContactDetail.md) |  | [optional] 
**description** | **str** | Full description in plain text | [optional] 
**door_time** | **datetime** | Time when the admission starts | [optional] 
**duration** | **str** | Duration of the event in ISO-8601 format (PT45M) - 45 minutes | [optional] 
**end_approx** | **bool** | endDate is approximated based on historical data | [optional] 
**end_date** | **datetime** | Time when the event ends, if known | [optional] 
**ext_taxonomy** | [**List[FeatureReference]**](FeatureReference.md) | extended taxonomy such as IAB and Google AdWords | [optional] 
**genre** | [**List[FeatureReference]**](FeatureReference.md) | applicable Genres. (Tier 2 taxonomy). May include related genres from categories, not deemed as primary | [optional] 
**headline** | **str** | Optional short description in plain text | [optional] 
**home_team** | [**FeatureReference**](FeatureReference.md) |  | [optional] 
**html_description** | **str** | Full description with HTML formatting, where available | [optional] 
**image** | [**ImageMeta**](ImageMeta.md) |  | [optional] 
**in_language** | [**FeatureReference**](FeatureReference.md) |  | [optional] 
**name** | **str** | Name of the event in plain text | [optional] 
**no_time** | **bool** | Specific time of the event is unknown. (shown only when true) | [optional] 
**offers** | [**List[TicketOffer]**](TicketOffer.md) | Ticketing options | [optional] 
**on_demand** | **bool** | This event can start at any time during specified window | [optional] 
**performer** | [**List[FeatureReference]**](FeatureReference.md) | List of Personas significant for this event | [optional] 
**photo** | [**List[ImageMeta]**](ImageMeta.md) | Primary image | [optional] 
**start_date** | **datetime** | Time when the event starts | [optional] 
**super_event** | [**OccurrenceReference**](OccurrenceReference.md) |  | [optional] 
**updated** | **datetime** | Timestamp of last modification (UTC) | [optional] 
**url** | **str** | Primary url for published event | [optional] 
**work_performed** | [**List[FeatureReference]**](FeatureReference.md) | Subject matter of the event | [optional] 

## Example

```python
from openapi_client.models.event_occurence_detail import EventOccurenceDetail

# TODO update the JSON string below
json = "{}"
# create an instance of EventOccurenceDetail from a JSON string
event_occurence_detail_instance = EventOccurenceDetail.from_json(json)
# print the JSON string representation of the object
print(EventOccurenceDetail.to_json())

# convert the object into a dict
event_occurence_detail_dict = event_occurence_detail_instance.to_dict()
# create an instance of EventOccurenceDetail from a dict
event_occurence_detail_from_dict = EventOccurenceDetail.from_dict(event_occurence_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


