# EventTagsListResponse

Event Tag List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_tags** | [**List[EventTag]**](EventTag.md) | Event tag collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#eventTagsListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.event_tags_list_response import EventTagsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventTagsListResponse from a JSON string
event_tags_list_response_instance = EventTagsListResponse.from_json(json)
# print the JSON string representation of the object
print(EventTagsListResponse.to_json())

# convert the object into a dict
event_tags_list_response_dict = event_tags_list_response_instance.to_dict()
# create an instance of EventTagsListResponse from a dict
event_tags_list_response_from_dict = EventTagsListResponse.from_dict(event_tags_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


