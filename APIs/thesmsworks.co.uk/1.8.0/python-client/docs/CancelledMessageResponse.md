# CancelledMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageid** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.cancelled_message_response import CancelledMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelledMessageResponse from a JSON string
cancelled_message_response_instance = CancelledMessageResponse.from_json(json)
# print the JSON string representation of the object
print(CancelledMessageResponse.to_json())

# convert the object into a dict
cancelled_message_response_dict = cancelled_message_response_instance.to_dict()
# create an instance of CancelledMessageResponse from a dict
cancelled_message_response_from_dict = CancelledMessageResponse.from_dict(cancelled_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


