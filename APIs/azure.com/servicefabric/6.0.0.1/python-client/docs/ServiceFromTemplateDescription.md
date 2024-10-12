# ServiceFromTemplateDescription

Defines description for creating a Service Fabric service from a template defined in the application manifest. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | 
**initialization_data** | **List[int]** | Array of bytes to be sent as an integer array. Each element of array is a number between 0 and 255. | [optional] 
**service_dns_name** | **str** | The DNS name of the service. It requires the DNS system service to be enabled in Service Fabric cluster. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | 
**service_package_activation_mode** | [**ServicePackageActivationMode**](ServicePackageActivationMode.md) |  | [optional] 
**service_type_name** | **str** | Name of the service type as specified in the service manifest. | 

## Example

```python
from openapi_client.models.service_from_template_description import ServiceFromTemplateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceFromTemplateDescription from a JSON string
service_from_template_description_instance = ServiceFromTemplateDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceFromTemplateDescription.to_json())

# convert the object into a dict
service_from_template_description_dict = service_from_template_description_instance.to_dict()
# create an instance of ServiceFromTemplateDescription from a dict
service_from_template_description_from_dict = ServiceFromTemplateDescription.from_dict(service_from_template_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


