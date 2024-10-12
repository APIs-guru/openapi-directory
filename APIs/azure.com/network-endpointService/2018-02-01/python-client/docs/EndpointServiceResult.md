# EndpointServiceResult

Endpoint service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the endpoint service. | [optional] [readonly] 
**type** | **str** | Type of the endpoint service. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.endpoint_service_result import EndpointServiceResult

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointServiceResult from a JSON string
endpoint_service_result_instance = EndpointServiceResult.from_json(json)
# print the JSON string representation of the object
print(EndpointServiceResult.to_json())

# convert the object into a dict
endpoint_service_result_dict = endpoint_service_result_instance.to_dict()
# create an instance of EndpointServiceResult from a dict
endpoint_service_result_from_dict = EndpointServiceResult.from_dict(endpoint_service_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


