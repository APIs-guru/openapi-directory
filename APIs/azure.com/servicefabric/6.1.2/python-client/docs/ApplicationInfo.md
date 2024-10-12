# ApplicationInfo

Information about a Service Fabric application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_definition_kind** | [**ApplicationDefinitionKind**](ApplicationDefinitionKind.md) |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**id** | **str** | The identity of the application. This is an encoded representation of the application name. This is used in the REST APIs to identify the application resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp\\~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions.  | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**parameters** | [**List[ApplicationParameter]**](ApplicationParameter.md) | List of application parameters with overridden values from their default values specified in the application manifest. | [optional] 
**status** | [**ApplicationStatus**](ApplicationStatus.md) |  | [optional] 
**type_name** | **str** | The application type name as defined in the application manifest. | [optional] 
**type_version** | **str** | The version of the application type as defined in the application manifest. | [optional] 

## Example

```python
from openapi_client.models.application_info import ApplicationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInfo from a JSON string
application_info_instance = ApplicationInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationInfo.to_json())

# convert the object into a dict
application_info_dict = application_info_instance.to_dict()
# create an instance of ApplicationInfo from a dict
application_info_from_dict = ApplicationInfo.from_dict(application_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


