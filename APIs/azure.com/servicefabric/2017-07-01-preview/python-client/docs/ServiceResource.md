# ServiceResource

The service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceProperties**](ServiceProperties.md) |  | [optional] 
**id** | **str** | Azure resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_resource import ServiceResource

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResource from a JSON string
service_resource_instance = ServiceResource.from_json(json)
# print the JSON string representation of the object
print(ServiceResource.to_json())

# convert the object into a dict
service_resource_dict = service_resource_instance.to_dict()
# create an instance of ServiceResource from a dict
service_resource_from_dict = ServiceResource.from_dict(service_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


