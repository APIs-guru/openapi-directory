# ResourceRequests

This type describes the requested resources for a given container. It describes the least amount of resources required for the container. A container can consume more than requested resources up to the specified limits before being restarted. Currently, the requested resources are treated as limits.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | Requested number of CPU cores. At present, only full cores are supported. | 
**memory_in_gb** | **float** | The memory request in GB for this container. | 

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


