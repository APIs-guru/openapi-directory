# CreateDeviceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**push_provider** | **str** |  | [optional] 
**push_provider_name** | **str** |  | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** | **Server-side only**. User ID which server acts upon | [optional] 

## Example

```python
from openapi_client.models.create_device_request import CreateDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceRequest from a JSON string
create_device_request_instance = CreateDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceRequest.to_json())

# convert the object into a dict
create_device_request_dict = create_device_request_instance.to_dict()
# create an instance of CreateDeviceRequest from a dict
create_device_request_from_dict = CreateDeviceRequest.from_dict(create_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


