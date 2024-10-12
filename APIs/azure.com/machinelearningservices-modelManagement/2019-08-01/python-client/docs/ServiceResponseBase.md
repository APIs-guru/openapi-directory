# ServiceResponseBase

The base service response. The correct inherited response based on computeType will be returned (ex. ACIServiceResponse)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_type** | **str** | The compute environment type for the service. | 
**created_time** | **datetime** | The time the service was created. | [optional] 
**deployment_type** | **str** | The deployment type for the service. | [optional] 
**description** | **str** | The service description. | [optional] 
**error** | [**ModelErrorResponse**](ModelErrorResponse.md) |  | [optional] 
**id** | **str** | The service Id. | [optional] 
**kv_tags** | **Dict[str, str]** | The service tag dictionary. Tags are mutable. | [optional] 
**name** | **str** | The service name. | [optional] 
**operation_id** | **str** | The ID of the latest asynchronous operation for this service. | [optional] 
**properties** | **Dict[str, str]** | The service property dictionary. Properties are immutable. | [optional] 
**state** | **str** | The current state of the service. | [optional] 
**updated_time** | **datetime** | The time the service was updated. | [optional] 

## Example

```python
from openapi_client.models.service_response_base import ServiceResponseBase

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResponseBase from a JSON string
service_response_base_instance = ServiceResponseBase.from_json(json)
# print the JSON string representation of the object
print(ServiceResponseBase.to_json())

# convert the object into a dict
service_response_base_dict = service_response_base_instance.to_dict()
# create an instance of ServiceResponseBase from a dict
service_response_base_from_dict = ServiceResponseBase.from_dict(service_response_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


