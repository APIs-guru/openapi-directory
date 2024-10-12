# SetMuteRequest

Request message for updating a finding's mute status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mute** | **str** | Required. The desired state of the Mute. | [optional] 

## Example

```python
from openapi_client.models.set_mute_request import SetMuteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetMuteRequest from a JSON string
set_mute_request_instance = SetMuteRequest.from_json(json)
# print the JSON string representation of the object
print(SetMuteRequest.to_json())

# convert the object into a dict
set_mute_request_dict = set_mute_request_instance.to_dict()
# create an instance of SetMuteRequest from a dict
set_mute_request_from_dict = SetMuteRequest.from_dict(set_mute_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


