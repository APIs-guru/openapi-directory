# ServiceNameInfo

Information about the service name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity of the service. This is an encoded representation of the service name. This is used in the REST APIs to identify the service resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1\\~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | [optional] 
**name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.service_name_info import ServiceNameInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceNameInfo from a JSON string
service_name_info_instance = ServiceNameInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceNameInfo.to_json())

# convert the object into a dict
service_name_info_dict = service_name_info_instance.to_dict()
# create an instance of ServiceNameInfo from a dict
service_name_info_from_dict = ServiceNameInfo.from_dict(service_name_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


