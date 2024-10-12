# MethodSettings

Describes the generator configuration for a method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_populated_fields** | **List[str]** | List of top-level fields of the request message, that should be automatically populated by the client libraries based on their (google.api.field_info).format. Currently supported format: UUID4. Example of a YAML configuration: publishing: method_settings: - selector: google.example.v1.ExampleService.CreateExample auto_populated_fields: - request_id | [optional] 
**long_running** | [**LongRunning**](LongRunning.md) |  | [optional] 
**selector** | **str** | The fully qualified name of the method, for which the options below apply. This is used to find the method to apply the options. | [optional] 

## Example

```python
from openapi_client.models.method_settings import MethodSettings

# TODO update the JSON string below
json = "{}"
# create an instance of MethodSettings from a JSON string
method_settings_instance = MethodSettings.from_json(json)
# print the JSON string representation of the object
print(MethodSettings.to_json())

# convert the object into a dict
method_settings_dict = method_settings_instance.to_dict()
# create an instance of MethodSettings from a dict
method_settings_from_dict = MethodSettings.from_dict(method_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


