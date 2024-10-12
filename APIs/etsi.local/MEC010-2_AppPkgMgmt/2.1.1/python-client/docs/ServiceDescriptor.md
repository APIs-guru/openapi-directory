# ServiceDescriptor

'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ser_category** | **object** | See MEC011 | [optional] 
**ser_name** | **str** | The name of the service, for example, RNIS, LocationService, etc. | 
**transports_supported** | [**TransportsSupported**](TransportsSupported.md) |  | [optional] 
**version** | **str** | The version of the service. | 

## Example

```python
from openapi_client.models.service_descriptor import ServiceDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDescriptor from a JSON string
service_descriptor_instance = ServiceDescriptor.from_json(json)
# print the JSON string representation of the object
print(ServiceDescriptor.to_json())

# convert the object into a dict
service_descriptor_dict = service_descriptor_instance.to_dict()
# create an instance of ServiceDescriptor from a dict
service_descriptor_from_dict = ServiceDescriptor.from_dict(service_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


