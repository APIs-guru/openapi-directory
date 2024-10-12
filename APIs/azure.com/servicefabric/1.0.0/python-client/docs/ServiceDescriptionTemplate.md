# ServiceDescriptionTemplate

The template of the service description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** |  | [optional] 
**service_type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_description_template import ServiceDescriptionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDescriptionTemplate from a JSON string
service_description_template_instance = ServiceDescriptionTemplate.from_json(json)
# print the JSON string representation of the object
print(ServiceDescriptionTemplate.to_json())

# convert the object into a dict
service_description_template_dict = service_description_template_instance.to_dict()
# create an instance of ServiceDescriptionTemplate from a dict
service_description_template_from_dict = ServiceDescriptionTemplate.from_dict(service_description_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


