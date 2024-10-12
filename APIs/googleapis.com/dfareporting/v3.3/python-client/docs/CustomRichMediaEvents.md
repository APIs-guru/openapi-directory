# CustomRichMediaEvents

Represents a Custom Rich Media Events group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filtered_event_ids** | [**List[DimensionValue]**](DimensionValue.md) | List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#customRichMediaEvents. | [optional] 

## Example

```python
from openapi_client.models.custom_rich_media_events import CustomRichMediaEvents

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRichMediaEvents from a JSON string
custom_rich_media_events_instance = CustomRichMediaEvents.from_json(json)
# print the JSON string representation of the object
print(CustomRichMediaEvents.to_json())

# convert the object into a dict
custom_rich_media_events_dict = custom_rich_media_events_instance.to_dict()
# create an instance of CustomRichMediaEvents from a dict
custom_rich_media_events_from_dict = CustomRichMediaEvents.from_dict(custom_rich_media_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


