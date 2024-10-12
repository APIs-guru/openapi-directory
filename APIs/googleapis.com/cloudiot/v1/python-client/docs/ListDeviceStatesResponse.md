# ListDeviceStatesResponse

Response for `ListDeviceStates`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_states** | [**List[DeviceState]**](DeviceState.md) | The last few device states. States are listed in descending order of server update time, starting from the most recent one. | [optional] 

## Example

```python
from openapi_client.models.list_device_states_response import ListDeviceStatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeviceStatesResponse from a JSON string
list_device_states_response_instance = ListDeviceStatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeviceStatesResponse.to_json())

# convert the object into a dict
list_device_states_response_dict = list_device_states_response_instance.to_dict()
# create an instance of ListDeviceStatesResponse from a dict
list_device_states_response_from_dict = ListDeviceStatesResponse.from_dict(list_device_states_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


