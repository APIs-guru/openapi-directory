# ListTopicSnapshotsResponse

Response for the `ListTopicSnapshots` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. If not empty, indicates that there may be more snapshots that match the request; this value should be passed in a new &#x60;ListTopicSnapshotsRequest&#x60; to get more snapshots. | [optional] 
**snapshots** | **List[str]** | Optional. The names of the snapshots that match the request. | [optional] 

## Example

```python
from openapi_client.models.list_topic_snapshots_response import ListTopicSnapshotsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTopicSnapshotsResponse from a JSON string
list_topic_snapshots_response_instance = ListTopicSnapshotsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTopicSnapshotsResponse.to_json())

# convert the object into a dict
list_topic_snapshots_response_dict = list_topic_snapshots_response_instance.to_dict()
# create an instance of ListTopicSnapshotsResponse from a dict
list_topic_snapshots_response_from_dict = ListTopicSnapshotsResponse.from_dict(list_topic_snapshots_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


