# TimeTarget

A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_time** | **str** | Request the cursor of the first message with event time greater than or equal to &#x60;event_time&#x60;. If messages are missing an event time, the publish time is used as a fallback. As event times are user supplied, subsequent messages may have event times less than &#x60;event_time&#x60; and should be filtered by the client, if necessary. | [optional] 
**publish_time** | **str** | Request the cursor of the first message with publish time greater than or equal to &#x60;publish_time&#x60;. All messages thereafter are guaranteed to have publish times &gt;&#x3D; &#x60;publish_time&#x60;. | [optional] 

## Example

```python
from openapi_client.models.time_target import TimeTarget

# TODO update the JSON string below
json = "{}"
# create an instance of TimeTarget from a JSON string
time_target_instance = TimeTarget.from_json(json)
# print the JSON string representation of the object
print(TimeTarget.to_json())

# convert the object into a dict
time_target_dict = time_target_instance.to_dict()
# create an instance of TimeTarget from a dict
time_target_from_dict = TimeTarget.from_dict(time_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


