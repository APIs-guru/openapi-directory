# ListAnnouncementsResponse

Response when listing course work.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**announcements** | [**List[Announcement]**](Announcement.md) | Announcement items that match the request. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

## Example

```python
from openapi_client.models.list_announcements_response import ListAnnouncementsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAnnouncementsResponse from a JSON string
list_announcements_response_instance = ListAnnouncementsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAnnouncementsResponse.to_json())

# convert the object into a dict
list_announcements_response_dict = list_announcements_response_instance.to_dict()
# create an instance of ListAnnouncementsResponse from a dict
list_announcements_response_from_dict = ListAnnouncementsResponse.from_dict(list_announcements_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


