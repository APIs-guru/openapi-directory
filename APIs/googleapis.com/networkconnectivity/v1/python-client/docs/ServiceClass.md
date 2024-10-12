# ServiceClass

The ServiceClass resource. Next id: 9

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the ServiceClass was created. | [optional] [readonly] 
**description** | **str** | A description of this resource. | [optional] 
**etag** | **str** | Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**name** | **str** | Immutable. The name of a ServiceClass resource. Format: projects/{project}/locations/{location}/serviceClasses/{service_class} See: https://google.aip.dev/122#fields-representing-resource-names | [optional] 
**service_class** | **str** | Output only. The generated service class name. Use this name to refer to the Service class in Service Connection Maps and Service Connection Policies. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the ServiceClass was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_class import ServiceClass

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceClass from a JSON string
service_class_instance = ServiceClass.from_json(json)
# print the JSON string representation of the object
print(ServiceClass.to_json())

# convert the object into a dict
service_class_dict = service_class_instance.to_dict()
# create an instance of ServiceClass from a dict
service_class_from_dict = ServiceClass.from_dict(service_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


