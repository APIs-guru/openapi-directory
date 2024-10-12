# ServiceBinding

ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the ServiceBinding resource. | [optional] 
**name** | **str** | Required. Name of the ServiceBinding resource. It matches pattern &#x60;projects/*/locations/global/serviceBindings/service_binding_name&#x60;. | [optional] 
**service** | **str** | Required. The full Service Directory Service name of the format projects/*/locations/*/namespaces/*/services/* | [optional] 
**service_id** | **str** | Output only. The unique identifier of the Service Directory Service against which the Service Binding resource is validated. This is populated when the Service Binding resource is used in another resource (like Backend Service). This is of the UUID4 format. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_binding import ServiceBinding

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBinding from a JSON string
service_binding_instance = ServiceBinding.from_json(json)
# print the JSON string representation of the object
print(ServiceBinding.to_json())

# convert the object into a dict
service_binding_dict = service_binding_instance.to_dict()
# create an instance of ServiceBinding from a dict
service_binding_from_dict = ServiceBinding.from_dict(service_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


