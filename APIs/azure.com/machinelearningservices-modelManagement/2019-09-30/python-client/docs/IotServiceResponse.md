# IotServiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_enabled** | **bool** |  | [optional] 
**compute_name** | **str** |  | [optional] 
**image_details** | [**ImageResponseBase**](ImageResponseBase.md) |  | [optional] 
**image_id** | **str** |  | [optional] 
**iot_device_id** | **str** |  | [optional] 
**iot_edge_modules** | [**List[IotModuleSettings]**](IotModuleSettings.md) |  | [optional] 
**routes** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.iot_service_response import IotServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IotServiceResponse from a JSON string
iot_service_response_instance = IotServiceResponse.from_json(json)
# print the JSON string representation of the object
print(IotServiceResponse.to_json())

# convert the object into a dict
iot_service_response_dict = iot_service_response_instance.to_dict()
# create an instance of IotServiceResponse from a dict
iot_service_response_from_dict = IotServiceResponse.from_dict(iot_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


