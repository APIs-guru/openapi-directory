# Context


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | **List[str]** | [Optional] App where the card should be shown. If missing, the card will be shown in TOPAZ. | [optional] 
**day_of_week** | **List[int]** | [Optional] Day of week when the card should be shown, where 0 is Monday. | [optional] 
**end_date_sec** | **str** | [Optional] Date (in seconds since epoch) when the card should stop being shown. If missing, end_date_sec will be set to Jan 1st, 2100. | [optional] 
**end_day_offset_sec** | **str** | [Optional] End time in seconds, within a day, when the card should stop being shown if it&#39;s within [start_date_sec, end_date_sec]. If missing, this is set to 86400 (24 hours x 3600 sec/hour), i.e., midnight next day. | [optional] 
**locale** | **List[str]** | [Optional] The locales for which the card should be triggered (e.g., en_US and en_CA). If missing, the card is going to show to clients regardless of their locale. | [optional] 
**location** | **List[str]** | [Optional] Text-free locations where the card should be shown. This is expected to match the user&#39;s location in focus. If no location is specified, the card will be shown for any location. | [optional] 
**query** | **List[str]** | [Required only for Answer and RHS cards - will be ignored for Homepage] cards. It&#39;s the exact case-insensitive queries that will trigger the Answer or RHS card. | [optional] 
**start_date_sec** | **str** | [Optional] Date (in seconds since epoch) when the card should start being shown. If missing, start_date_sec will be Jan 1st, 1970 UTC. | [optional] 
**start_day_offset_sec** | **str** | [Optional] Start time in seconds, within a day, when the card should be shown if it&#39;s within [start_date_sec, end_date_sec]. If 0, the card will be shown from 12:00am on. | [optional] 
**surface** | **List[str]** | [Optional] Surface where the card should be shown in. If missing, the card will be shown in any surface. | [optional] 
**type** | **List[str]** | [Required] Type of the card (homepage, Answer or RHS). | [optional] 

## Example

```python
from openapi_client.models.context import Context

# TODO update the JSON string below
json = "{}"
# create an instance of Context from a JSON string
context_instance = Context.from_json(json)
# print the JSON string representation of the object
print(Context.to_json())

# convert the object into a dict
context_dict = context_instance.to_dict()
# create an instance of Context from a dict
context_from_dict = Context.from_dict(context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


