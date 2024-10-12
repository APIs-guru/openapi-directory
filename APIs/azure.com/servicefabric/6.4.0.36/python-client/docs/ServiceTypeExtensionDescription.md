# ServiceTypeExtensionDescription

Describes extension of a service type defined in the service manifest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The name of the extension. | [optional] 
**value** | **str** | The extension value. | [optional] 

## Example

```python
from openapi_client.models.service_type_extension_description import ServiceTypeExtensionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeExtensionDescription from a JSON string
service_type_extension_description_instance = ServiceTypeExtensionDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeExtensionDescription.to_json())

# convert the object into a dict
service_type_extension_description_dict = service_type_extension_description_instance.to_dict()
# create an instance of ServiceTypeExtensionDescription from a dict
service_type_extension_description_from_dict = ServiceTypeExtensionDescription.from_dict(service_type_extension_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


