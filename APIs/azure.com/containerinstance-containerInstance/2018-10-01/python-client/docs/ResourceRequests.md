# ResourceRequests

The resource requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | The CPU request of this container instance. | 
**gpu** | [**GpuResource**](GpuResource.md) |  | [optional] 
**memory_in_gb** | **float** | The memory request in GB of this container instance. | 

## Example

```python
from openapi_client.models.resource_requests import ResourceRequests

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRequests from a JSON string
resource_requests_instance = ResourceRequests.from_json(json)
# print the JSON string representation of the object
print(ResourceRequests.to_json())

# convert the object into a dict
resource_requests_dict = resource_requests_instance.to_dict()
# create an instance of ResourceRequests from a dict
resource_requests_from_dict = ResourceRequests.from_dict(resource_requests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


