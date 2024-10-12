# ApplicationNameInfo

Information about the application name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity of the application. This is an encoded representation of the application name. This is used in the REST APIs to identify the application resource. Starting in version 6.0, hierarchical names are delimited with the \&quot;\\~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp\\~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | [optional] 
**name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.application_name_info import ApplicationNameInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationNameInfo from a JSON string
application_name_info_instance = ApplicationNameInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationNameInfo.to_json())

# convert the object into a dict
application_name_info_dict = application_name_info_instance.to_dict()
# create an instance of ApplicationNameInfo from a dict
application_name_info_from_dict = ApplicationNameInfo.from_dict(application_name_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


