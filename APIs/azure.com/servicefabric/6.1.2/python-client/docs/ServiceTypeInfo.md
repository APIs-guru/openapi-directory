# ServiceTypeInfo

Information about a service type that is defined in a service manifest of a provisioned application type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_service_group** | **bool** | Indicates whether the service is a service group. If it is, the property value is true otherwise false. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**service_manifest_version** | **str** | The version of the service manifest in which this service type is defined. | [optional] 
**service_type_description** | [**ServiceTypeDescription**](ServiceTypeDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_type_info import ServiceTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeInfo from a JSON string
service_type_info_instance = ServiceTypeInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeInfo.to_json())

# convert the object into a dict
service_type_info_dict = service_type_info_instance.to_dict()
# create an instance of ServiceTypeInfo from a dict
service_type_info_from_dict = ServiceTypeInfo.from_dict(service_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


