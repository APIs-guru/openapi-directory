# ServiceReference

Reference to an underlying networking resource that can comprise a Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Output only. Additional path under the resource URI (demultiplexing one resource URI into multiple entries). Smallest unit a policy can be attached to. Examples: URL Map path entry. | [optional] [readonly] 
**uri** | **str** | Output only. The underlying resource URI (For example, URI of Forwarding Rule, URL Map, and Backend Service). | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_reference import ServiceReference

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceReference from a JSON string
service_reference_instance = ServiceReference.from_json(json)
# print the JSON string representation of the object
print(ServiceReference.to_json())

# convert the object into a dict
service_reference_dict = service_reference_instance.to_dict()
# create an instance of ServiceReference from a dict
service_reference_from_dict = ServiceReference.from_dict(service_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


