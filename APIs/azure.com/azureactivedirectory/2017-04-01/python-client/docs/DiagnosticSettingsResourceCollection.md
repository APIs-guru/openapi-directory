# DiagnosticSettingsResourceCollection

Represents a collection of alert rule resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DiagnosticSettingsResource]**](DiagnosticSettingsResource.md) | The collection of diagnostic settings resources. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_settings_resource_collection import DiagnosticSettingsResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSettingsResourceCollection from a JSON string
diagnostic_settings_resource_collection_instance = DiagnosticSettingsResourceCollection.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSettingsResourceCollection.to_json())

# convert the object into a dict
diagnostic_settings_resource_collection_dict = diagnostic_settings_resource_collection_instance.to_dict()
# create an instance of DiagnosticSettingsResourceCollection from a dict
diagnostic_settings_resource_collection_from_dict = DiagnosticSettingsResourceCollection.from_dict(diagnostic_settings_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


