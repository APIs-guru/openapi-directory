# StopPollPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**Poll**](Poll.md) |  | 

## Example

```python
from openapi_client.models.stop_poll_post200_response import StopPollPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StopPollPost200Response from a JSON string
stop_poll_post200_response_instance = StopPollPost200Response.from_json(json)
# print the JSON string representation of the object
print(StopPollPost200Response.to_json())

# convert the object into a dict
stop_poll_post200_response_dict = stop_poll_post200_response_instance.to_dict()
# create an instance of StopPollPost200Response from a dict
stop_poll_post200_response_from_dict = StopPollPost200Response.from_dict(stop_poll_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


