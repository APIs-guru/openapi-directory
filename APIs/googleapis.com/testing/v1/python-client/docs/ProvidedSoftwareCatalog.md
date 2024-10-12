# ProvidedSoftwareCatalog

The currently provided software environment on the devices under test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**androidx_orchestrator_version** | **str** | A string representing the current version of AndroidX Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#androidx.test:orchestrator. | [optional] 
**orchestrator_version** | **str** | Deprecated: Use AndroidX Test Orchestrator going forward. A string representing the current version of Android Test Orchestrator that is used in the environment. The package is available at https://maven.google.com/web/index.html#com.android.support.test:orchestrator. | [optional] 

## Example

```python
from openapi_client.models.provided_software_catalog import ProvidedSoftwareCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of ProvidedSoftwareCatalog from a JSON string
provided_software_catalog_instance = ProvidedSoftwareCatalog.from_json(json)
# print the JSON string representation of the object
print(ProvidedSoftwareCatalog.to_json())

# convert the object into a dict
provided_software_catalog_dict = provided_software_catalog_instance.to_dict()
# create an instance of ProvidedSoftwareCatalog from a dict
provided_software_catalog_from_dict = ProvidedSoftwareCatalog.from_dict(provided_software_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


