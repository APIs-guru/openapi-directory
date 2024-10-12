# MultiMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[MessageDetailsResponse]**](MessageDetailsResponse.md) | An array of messageDetailsResponse objects | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.multi_message_response import MultiMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MultiMessageResponse from a JSON string
multi_message_response_instance = MultiMessageResponse.from_json(json)
# print the JSON string representation of the object
print(MultiMessageResponse.to_json())

# convert the object into a dict
multi_message_response_dict = multi_message_response_instance.to_dict()
# create an instance of MultiMessageResponse from a dict
multi_message_response_from_dict = MultiMessageResponse.from_dict(multi_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


