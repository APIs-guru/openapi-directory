# DiagnosticSettingsCategoryResourceCollection

Represents a collection of diagnostic setting category resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DiagnosticSettingsCategoryResource]**](DiagnosticSettingsCategoryResource.md) | The collection of diagnostic settings category resources. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_settings_category_resource_collection import DiagnosticSettingsCategoryResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSettingsCategoryResourceCollection from a JSON string
diagnostic_settings_category_resource_collection_instance = DiagnosticSettingsCategoryResourceCollection.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSettingsCategoryResourceCollection.to_json())

# convert the object into a dict
diagnostic_settings_category_resource_collection_dict = diagnostic_settings_category_resource_collection_instance.to_dict()
# create an instance of DiagnosticSettingsCategoryResourceCollection from a dict
diagnostic_settings_category_resource_collection_from_dict = DiagnosticSettingsCategoryResourceCollection.from_dict(diagnostic_settings_category_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


