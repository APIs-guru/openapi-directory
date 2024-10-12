# SubscriptionFeatureSectionTemplate


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
from openapi_client.models.subscription_feature_section_template import SubscriptionFeatureSectionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFeatureSectionTemplate from a JSON string
subscription_feature_section_template_instance = SubscriptionFeatureSectionTemplate.from_json(json)
# print the JSON string representation of the object
print(SubscriptionFeatureSectionTemplate.to_json())

# convert the object into a dict
subscription_feature_section_template_dict = subscription_feature_section_template_instance.to_dict()
# create an instance of SubscriptionFeatureSectionTemplate from a dict
subscription_feature_section_template_from_dict = SubscriptionFeatureSectionTemplate.from_dict(subscription_feature_section_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


