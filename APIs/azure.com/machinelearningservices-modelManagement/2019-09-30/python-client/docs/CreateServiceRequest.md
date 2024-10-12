# CreateServiceRequest

The base class for creating a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_type** | **str** | The compute environment type for the service. | 
**deployment_type** | **str** | The deployment type for the service. | [optional] 
**description** | **str** | The description of the service. | [optional] 
**environment_image_request** | [**EnvironmentImageRequest**](EnvironmentImageRequest.md) |  | [optional] 
**image_id** | **str** | The Image Id. | [optional] 
**keys** | [**AuthKeys**](AuthKeys.md) |  | [optional] 
**kv_tags** | **Dict[str, str]** | The service tag dictionary. Tags are mutable. | [optional] 
**location** | **str** | The location of the service. | [optional] 
**name** | **str** | The service name. | 
**properties** | **Dict[str, str]** | The service properties dictionary. Properties are immutable. | [optional] 

## Example

```python
from openapi_client.models.create_service_request import CreateServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateServiceRequest from a JSON string
create_service_request_instance = CreateServiceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateServiceRequest.to_json())

# convert the object into a dict
create_service_request_dict = create_service_request_instance.to_dict()
# create an instance of CreateServiceRequest from a dict
create_service_request_from_dict = CreateServiceRequest.from_dict(create_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


