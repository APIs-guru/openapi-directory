# UpdateTopicRequest

Request for the UpdateTopic method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | [**Topic**](Topic.md) |  | [optional] 
**update_mask** | **str** | Required. Indicates which fields in the provided topic to update. Must be specified and non-empty. Note that if &#x60;update_mask&#x60; contains \&quot;message_storage_policy\&quot; but the &#x60;message_storage_policy&#x60; is not set in the &#x60;topic&#x60; provided above, then the updated value is determined by the policy configured at the project or organization level. | [optional] 

## Example

```python
from openapi_client.models.update_topic_request import UpdateTopicRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTopicRequest from a JSON string
update_topic_request_instance = UpdateTopicRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTopicRequest.to_json())

# convert the object into a dict
update_topic_request_dict = update_topic_request_instance.to_dict()
# create an instance of UpdateTopicRequest from a dict
update_topic_request_from_dict = UpdateTopicRequest.from_dict(update_topic_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


