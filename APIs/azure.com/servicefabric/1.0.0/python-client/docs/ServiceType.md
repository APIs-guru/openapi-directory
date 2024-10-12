# ServiceType

The type of the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_service_group** | **bool** |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 
**service_manifest_version** | **str** |  | [optional] 
**service_type_description** | [**ServiceTypeServiceTypeDescription**](ServiceTypeServiceTypeDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_type import ServiceType

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceType from a JSON string
service_type_instance = ServiceType.from_json(json)
# print the JSON string representation of the object
print(ServiceType.to_json())

# convert the object into a dict
service_type_dict = service_type_instance.to_dict()
# create an instance of ServiceType from a dict
service_type_from_dict = ServiceType.from_dict(service_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


