# DeviceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Date/time of creation | [optional] 
**disabled** | **bool** | Whether device is disabled or not | [optional] 
**disabled_reason** | **str** | Reason explaining why device had been disabled | [optional] 
**id** | **str** |  | [optional] 
**push_provider** | **str** |  | [optional] 
**push_provider_name** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_request import DeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRequest from a JSON string
device_request_instance = DeviceRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceRequest.to_json())

# convert the object into a dict
device_request_dict = device_request_instance.to_dict()
# create an instance of DeviceRequest from a dict
device_request_from_dict = DeviceRequest.from_dict(device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


