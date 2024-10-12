# WatchRequest

Set up or update a new push notification watch on this user's mailbox.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_filter_action** | **str** | Filtering behavior of &#x60;labelIds list&#x60; specified. This field is deprecated because it caused incorrect behavior in some cases; use &#x60;label_filter_behavior&#x60; instead. | [optional] 
**label_filter_behavior** | **str** | Filtering behavior of &#x60;labelIds list&#x60; specified. This field replaces &#x60;label_filter_action&#x60;; if set, &#x60;label_filter_action&#x60; is ignored. | [optional] 
**label_ids** | **List[str]** | List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated. | [optional] 
**topic_name** | **str** | A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail \&quot;publish\&quot; permission on it. For example, \&quot;projects/my-project-identifier/topics/my-topic-name\&quot; (using the Cloud Pub/Sub \&quot;v1\&quot; topic naming format). Note that the \&quot;my-project-identifier\&quot; portion must exactly match your Google developer project id (the one executing this watch request). | [optional] 

## Example

```python
from openapi_client.models.watch_request import WatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WatchRequest from a JSON string
watch_request_instance = WatchRequest.from_json(json)
# print the JSON string representation of the object
print(WatchRequest.to_json())

# convert the object into a dict
watch_request_dict = watch_request_instance.to_dict()
# create an instance of WatchRequest from a dict
watch_request_from_dict = WatchRequest.from_dict(watch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


