# PullStartedEvent

An event generated when the worker starts pulling an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_uri** | **str** | The URI of the image that was pulled. | [optional] 

## Example

```python
from openapi_client.models.pull_started_event import PullStartedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PullStartedEvent from a JSON string
pull_started_event_instance = PullStartedEvent.from_json(json)
# print the JSON string representation of the object
print(PullStartedEvent.to_json())

# convert the object into a dict
pull_started_event_dict = pull_started_event_instance.to_dict()
# create an instance of PullStartedEvent from a dict
pull_started_event_from_dict = PullStartedEvent.from_dict(pull_started_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


