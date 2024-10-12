# TranslationModelMetadata

Model metadata that is specific to translation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_model** | **str** | The resource name of the model to use as a baseline to train the custom model. If unset, we use the default base model provided by Google Translate. Format: &#x60;projects/{project_id}/locations/{location_id}/models/{model_id}&#x60; | [optional] 
**source_language_code** | **str** | Output only. Inferred from the dataset. The source languge (The BCP-47 language code) that is used for training. | [optional] 
**target_language_code** | **str** | Output only. The target languge (The BCP-47 language code) that is used for training. | [optional] 

## Example

```python
from openapi_client.models.translation_model_metadata import TranslationModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TranslationModelMetadata from a JSON string
translation_model_metadata_instance = TranslationModelMetadata.from_json(json)
# print the JSON string representation of the object
print(TranslationModelMetadata.to_json())

# convert the object into a dict
translation_model_metadata_dict = translation_model_metadata_instance.to_dict()
# create an instance of TranslationModelMetadata from a dict
translation_model_metadata_from_dict = TranslationModelMetadata.from_dict(translation_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


