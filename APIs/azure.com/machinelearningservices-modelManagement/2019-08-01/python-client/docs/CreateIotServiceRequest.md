# CreateIotServiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acr_credentials** | [**List[RegistryInfo]**](RegistryInfo.md) |  | [optional] 
**auth_enabled** | **bool** |  | [optional] 
**compute_name** | **str** |  | [optional] 
**iot_device_id** | **str** |  | [optional] 
**iot_edge_module** | [**IotBaseModuleSettings**](IotBaseModuleSettings.md) |  | [optional] 
**iot_edge_user_module** | [**List[IotModuleSettings]**](IotModuleSettings.md) |  | [optional] 
**routes** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.create_iot_service_request import CreateIotServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIotServiceRequest from a JSON string
create_iot_service_request_instance = CreateIotServiceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateIotServiceRequest.to_json())

# convert the object into a dict
create_iot_service_request_dict = create_iot_service_request_instance.to_dict()
# create an instance of CreateIotServiceRequest from a dict
create_iot_service_request_from_dict = CreateIotServiceRequest.from_dict(create_iot_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


