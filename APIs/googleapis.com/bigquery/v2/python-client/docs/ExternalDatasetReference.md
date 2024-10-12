# ExternalDatasetReference

Configures the access a dataset defined in an external metadata storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | **str** | Required. The connection id that is used to access the external_source. Format: projects/{project_id}/locations/{location_id}/connections/{connection_id} | [optional] 
**external_source** | **str** | Required. External source that backs this dataset. | [optional] 

## Example

```python
from openapi_client.models.external_dataset_reference import ExternalDatasetReference

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalDatasetReference from a JSON string
external_dataset_reference_instance = ExternalDatasetReference.from_json(json)
# print the JSON string representation of the object
print(ExternalDatasetReference.to_json())

# convert the object into a dict
external_dataset_reference_dict = external_dataset_reference_instance.to_dict()
# create an instance of ExternalDatasetReference from a dict
external_dataset_reference_from_dict = ExternalDatasetReference.from_dict(external_dataset_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


