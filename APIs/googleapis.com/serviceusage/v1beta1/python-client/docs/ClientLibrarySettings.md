# ClientLibrarySettings

Details about how and where to publish client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpp_settings** | [**CppSettings**](CppSettings.md) |  | [optional] 
**dotnet_settings** | [**DotnetSettings**](DotnetSettings.md) |  | [optional] 
**go_settings** | [**GoSettings**](GoSettings.md) |  | [optional] 
**java_settings** | [**JavaSettings**](JavaSettings.md) |  | [optional] 
**launch_stage** | **str** | Launch stage of this version of the API. | [optional] 
**node_settings** | [**NodeSettings**](NodeSettings.md) |  | [optional] 
**php_settings** | [**PhpSettings**](PhpSettings.md) |  | [optional] 
**python_settings** | [**PythonSettings**](PythonSettings.md) |  | [optional] 
**rest_numeric_enums** | **bool** | When using transport&#x3D;rest, the client request will encode enums as numbers rather than strings. | [optional] 
**ruby_settings** | [**RubySettings**](RubySettings.md) |  | [optional] 
**version** | **str** | Version of the API to apply these settings to. This is the full protobuf package for the API, ending in the version element. Examples: \&quot;google.cloud.speech.v1\&quot; and \&quot;google.spanner.admin.database.v1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.client_library_settings import ClientLibrarySettings

# TODO update the JSON string below
json = "{}"
# create an instance of ClientLibrarySettings from a JSON string
client_library_settings_instance = ClientLibrarySettings.from_json(json)
# print the JSON string representation of the object
print(ClientLibrarySettings.to_json())

# convert the object into a dict
client_library_settings_dict = client_library_settings_instance.to_dict()
# create an instance of ClientLibrarySettings from a dict
client_library_settings_from_dict = ClientLibrarySettings.from_dict(client_library_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


