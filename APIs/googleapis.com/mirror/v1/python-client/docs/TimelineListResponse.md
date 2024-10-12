# TimelineListResponse

A list of timeline items. This is the response from the server to GET requests on the timeline collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[TimelineItem]**](TimelineItem.md) | Items in the timeline. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#timeline. | [optional] [default to 'mirror#timeline']
**next_page_token** | **str** | The next page token. Provide this as the pageToken parameter in the request to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.timeline_list_response import TimelineListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TimelineListResponse from a JSON string
timeline_list_response_instance = TimelineListResponse.from_json(json)
# print the JSON string representation of the object
print(TimelineListResponse.to_json())

# convert the object into a dict
timeline_list_response_dict = timeline_list_response_instance.to_dict()
# create an instance of TimelineListResponse from a dict
timeline_list_response_from_dict = TimelineListResponse.from_dict(timeline_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


