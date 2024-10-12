# ScheduledMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageid** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.scheduled_message_response import ScheduledMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledMessageResponse from a JSON string
scheduled_message_response_instance = ScheduledMessageResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduledMessageResponse.to_json())

# convert the object into a dict
scheduled_message_response_dict = scheduled_message_response_instance.to_dict()
# create an instance of ScheduledMessageResponse from a dict
scheduled_message_response_from_dict = ScheduledMessageResponse.from_dict(scheduled_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


