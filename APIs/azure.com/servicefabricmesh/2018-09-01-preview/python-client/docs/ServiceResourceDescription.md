# ServiceResourceDescription

This type describes a service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceResourceProperties**](ServiceResourceProperties.md) |  | 
**id** | **str** | Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_resource_description import ServiceResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResourceDescription from a JSON string
service_resource_description_instance = ServiceResourceDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceResourceDescription.to_json())

# convert the object into a dict
service_resource_description_dict = service_resource_description_instance.to_dict()
# create an instance of ServiceResourceDescription from a dict
service_resource_description_from_dict = ServiceResourceDescription.from_dict(service_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


