# UpdateDevicesResponse

URL that can be used to check the status of the update devices operation and the updated profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_url** | **str** | URL that can be used to check the status of the update devices operation. | 

## Example

```python
from openapi_client.models.update_devices_response import UpdateDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDevicesResponse from a JSON string
update_devices_response_instance = UpdateDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateDevicesResponse.to_json())

# convert the object into a dict
update_devices_response_dict = update_devices_response_instance.to_dict()
# create an instance of UpdateDevicesResponse from a dict
update_devices_response_from_dict = UpdateDevicesResponse.from_dict(update_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


