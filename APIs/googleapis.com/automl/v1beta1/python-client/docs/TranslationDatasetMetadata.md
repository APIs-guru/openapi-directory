# TranslationDatasetMetadata

Dataset metadata that is specific to translation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_language_code** | **str** | Required. The BCP-47 language code of the source language. | [optional] 
**target_language_code** | **str** | Required. The BCP-47 language code of the target language. | [optional] 

## Example

```python
from openapi_client.models.translation_dataset_metadata import TranslationDatasetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TranslationDatasetMetadata from a JSON string
translation_dataset_metadata_instance = TranslationDatasetMetadata.from_json(json)
# print the JSON string representation of the object
print(TranslationDatasetMetadata.to_json())

# convert the object into a dict
translation_dataset_metadata_dict = translation_dataset_metadata_instance.to_dict()
# create an instance of TranslationDatasetMetadata from a dict
translation_dataset_metadata_from_dict = TranslationDatasetMetadata.from_dict(translation_dataset_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


