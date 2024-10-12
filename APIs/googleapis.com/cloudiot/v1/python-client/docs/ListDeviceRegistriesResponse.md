# ListDeviceRegistriesResponse

Response for `ListDeviceRegistries`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_registries** | [**List[DeviceRegistry]**](DeviceRegistry.md) | The registries that matched the query. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there may be more registries that match the request; this value should be passed in a new &#x60;ListDeviceRegistriesRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_device_registries_response import ListDeviceRegistriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeviceRegistriesResponse from a JSON string
list_device_registries_response_instance = ListDeviceRegistriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeviceRegistriesResponse.to_json())

# convert the object into a dict
list_device_registries_response_dict = list_device_registries_response_instance.to_dict()
# create an instance of ListDeviceRegistriesResponse from a dict
list_device_registries_response_from_dict = ListDeviceRegistriesResponse.from_dict(list_device_registries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


