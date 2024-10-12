# DotnetSettings

Settings for Dotnet client libraries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**CommonLanguageSettings**](CommonLanguageSettings.md) |  | [optional] 
**forced_namespace_aliases** | **List[str]** | Namespaces which must be aliased in snippets due to a known (but non-generator-predictable) naming collision | [optional] 
**handwritten_signatures** | **List[str]** | Method signatures (in the form \&quot;service.method(signature)\&quot;) which are provided separately, so shouldn&#39;t be generated. Snippets *calling* these methods are still generated, however. | [optional] 
**ignored_resources** | **List[str]** | List of full resource types to ignore during generation. This is typically used for API-specific Location resources, which should be handled by the generator as if they were actually the common Location resources. Example entry: \&quot;documentai.googleapis.com/Location\&quot; | [optional] 
**renamed_resources** | **Dict[str, str]** | Map from full resource types to the effective short name for the resource. This is used when otherwise resource named from different services would cause naming collisions. Example entry: \&quot;datalabeling.googleapis.com/Dataset\&quot;: \&quot;DataLabelingDataset\&quot; | [optional] 
**renamed_services** | **Dict[str, str]** | Map from original service names to renamed versions. This is used when the default generated types would cause a naming conflict. (Neither name is fully-qualified.) Example: Subscriber to SubscriberServiceApi. | [optional] 

## Example

```python
from openapi_client.models.dotnet_settings import DotnetSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DotnetSettings from a JSON string
dotnet_settings_instance = DotnetSettings.from_json(json)
# print the JSON string representation of the object
print(DotnetSettings.to_json())

# convert the object into a dict
dotnet_settings_dict = dotnet_settings_instance.to_dict()
# create an instance of DotnetSettings from a dict
dotnet_settings_from_dict = DotnetSettings.from_dict(dotnet_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


