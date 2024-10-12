# FeatureTemplateSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** | Unique identifier of configuration associated with the vertical pack. Required for cloning | 
**description** | **str** | Verbal description of template features, belonging to domain area, etc. | 
**id** | **str** | Unique document identifier. Can be up to 36 alphanumeric characters | 
**is_free** | **bool** | Shows whether Vertical pack is free or requires subscription | 
**language** | **str** | The language supported by the vertical pack | 
**name** | **str** | Name of the vertical pack | 
**type** | **str** | The type of the vertical pack, can be either \&quot;vertical-pack\&quot; or \&quot;language-default\&quot; | 
**version** | **str** | Version of the vertical pack, for versioning purposes. | 

## Example

```python
from openapi_client.models.feature_template_section import FeatureTemplateSection

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureTemplateSection from a JSON string
feature_template_section_instance = FeatureTemplateSection.from_json(json)
# print the JSON string representation of the object
print(FeatureTemplateSection.to_json())

# convert the object into a dict
feature_template_section_dict = feature_template_section_instance.to_dict()
# create an instance of FeatureTemplateSection from a dict
feature_template_section_from_dict = FeatureTemplateSection.from_dict(feature_template_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


