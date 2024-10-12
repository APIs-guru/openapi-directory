# ServiceTypeDescription

Describes a service type defined in the service manifest of a provisioned application type. The properties the the ones defined in the service manifest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensions** | [**List[ServiceTypeExtensionDescription]**](ServiceTypeExtensionDescription.md) | List of service type extensions. | [optional] 
**is_stateful** | **bool** | Indicates whether the service type is a stateful service type or a stateless service type. This property is true if the service type is a stateful service type, false otherwise. | [optional] 
**kind** | [**ServiceKind**](ServiceKind.md) |  | 
**placement_constraints** | **str** | The placement constraint to be used when instantiating this service in a Service Fabric cluster. | [optional] 
**service_placement_policies** | [**List[ServicePlacementPolicyDescription]**](ServicePlacementPolicyDescription.md) | List of service placement policy descriptions. | [optional] 
**service_type_name** | **str** | Name of the service type as specified in the service manifest. | [optional] 

## Example

```python
from openapi_client.models.service_type_description import ServiceTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeDescription from a JSON string
service_type_description_instance = ServiceTypeDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeDescription.to_json())

# convert the object into a dict
service_type_description_dict = service_type_description_instance.to_dict()
# create an instance of ServiceTypeDescription from a dict
service_type_description_from_dict = ServiceTypeDescription.from_dict(service_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


