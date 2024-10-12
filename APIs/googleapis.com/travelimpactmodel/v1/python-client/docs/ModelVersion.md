# ModelVersion

Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dated** | **str** | Dated versions: Model datasets are recreated with refreshed input data but no change to the algorithms regularly. | [optional] 
**major** | **int** | Major versions: Major changes to methodology (e.g. adding new data sources to the model that lead to major output changes). Such changes will be infrequent and announced well in advance. Might involve API version changes, which will respect guidelines in https://cloud.google.com/endpoints/docs/openapi/versioning-an-api#backwards-incompatible | [optional] 
**minor** | **int** | Minor versions: Changes to the model that, while being consistent across schema versions, change the model parameters or implementation. | [optional] 
**patch** | **int** | Patch versions: Implementation changes meant to address bugs or inaccuracies in the model implementation. | [optional] 

## Example

```python
from openapi_client.models.model_version import ModelVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ModelVersion from a JSON string
model_version_instance = ModelVersion.from_json(json)
# print the JSON string representation of the object
print(ModelVersion.to_json())

# convert the object into a dict
model_version_dict = model_version_instance.to_dict()
# create an instance of ModelVersion from a dict
model_version_from_dict = ModelVersion.from_dict(model_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


