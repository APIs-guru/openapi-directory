# GlossaryInputConfig

Input configuration for glossaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.glossary_input_config import GlossaryInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GlossaryInputConfig from a JSON string
glossary_input_config_instance = GlossaryInputConfig.from_json(json)
# print the JSON string representation of the object
print(GlossaryInputConfig.to_json())

# convert the object into a dict
glossary_input_config_dict = glossary_input_config_instance.to_dict()
# create an instance of GlossaryInputConfig from a dict
glossary_input_config_from_dict = GlossaryInputConfig.from_dict(glossary_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


