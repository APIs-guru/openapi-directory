# LiveStreamConfigurationIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The long-form description of the issue and how to resolve it. | [optional] 
**reason** | **str** | The short-form reason for this issue. | [optional] 
**severity** | **str** | How severe this issue is to the stream. | [optional] 
**type** | **str** | The kind of error happening. | [optional] 

## Example

```python
from openapi_client.models.live_stream_configuration_issue import LiveStreamConfigurationIssue

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStreamConfigurationIssue from a JSON string
live_stream_configuration_issue_instance = LiveStreamConfigurationIssue.from_json(json)
# print the JSON string representation of the object
print(LiveStreamConfigurationIssue.to_json())

# convert the object into a dict
live_stream_configuration_issue_dict = live_stream_configuration_issue_instance.to_dict()
# create an instance of LiveStreamConfigurationIssue from a dict
live_stream_configuration_issue_from_dict = LiveStreamConfigurationIssue.from_dict(live_stream_configuration_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


