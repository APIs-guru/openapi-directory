# PullStoppedEvent

An event generated when the worker stops pulling an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_uri** | **str** | The URI of the image that was pulled. | [optional] 

## Example

```python
from openapi_client.models.pull_stopped_event import PullStoppedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PullStoppedEvent from a JSON string
pull_stopped_event_instance = PullStoppedEvent.from_json(json)
# print the JSON string representation of the object
print(PullStoppedEvent.to_json())

# convert the object into a dict
pull_stopped_event_dict = pull_stopped_event_instance.to_dict()
# create an instance of PullStoppedEvent from a dict
pull_stopped_event_from_dict = PullStoppedEvent.from_dict(pull_stopped_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


