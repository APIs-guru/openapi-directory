# ServiceTypeServiceTypeDescription

The description of the service type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_persisted_state** | **bool** |  | [optional] 
**is_stateful** | **bool** |  | [optional] 
**placement_constraints** | **str** |  | [optional] 
**service_type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_type_service_type_description import ServiceTypeServiceTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeServiceTypeDescription from a JSON string
service_type_service_type_description_instance = ServiceTypeServiceTypeDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeServiceTypeDescription.to_json())

# convert the object into a dict
service_type_service_type_description_dict = service_type_service_type_description_instance.to_dict()
# create an instance of ServiceTypeServiceTypeDescription from a dict
service_type_service_type_description_from_dict = ServiceTypeServiceTypeDescription.from_dict(service_type_service_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


