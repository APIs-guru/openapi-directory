# TextExtractionModelMetadata

Model metadata that is specific to text extraction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_hint** | **str** | Indicates the scope of model use case. * &#x60;default&#x60;: Use to train a general text extraction model. Default value. * &#x60;health_care&#x60;: Use to train a text extraction model that is tuned for healthcare applications. | [optional] 

## Example

```python
from openapi_client.models.text_extraction_model_metadata import TextExtractionModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TextExtractionModelMetadata from a JSON string
text_extraction_model_metadata_instance = TextExtractionModelMetadata.from_json(json)
# print the JSON string representation of the object
print(TextExtractionModelMetadata.to_json())

# convert the object into a dict
text_extraction_model_metadata_dict = text_extraction_model_metadata_instance.to_dict()
# create an instance of TextExtractionModelMetadata from a dict
text_extraction_model_metadata_from_dict = TextExtractionModelMetadata.from_dict(text_extraction_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


