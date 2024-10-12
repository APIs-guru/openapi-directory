# SubscriptionFeatureSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | [**SubscriptionFeatureSectionCollection**](SubscriptionFeatureSectionCollection.md) |  | 
**document** | [**SubscriptionFeatureSectionDocument**](SubscriptionFeatureSectionDocument.md) |  | 
**html_processing** | **bool** | Identifies whether HTML processing feature is supported or not | 
**supported_languages** | **str** | Lists all languages which are allowed for current subscription | 
**templates** | [**SubscriptionFeatureSectionTemplate**](SubscriptionFeatureSectionTemplate.md) |  | 

## Example

```python
from openapi_client.models.subscription_feature_section import SubscriptionFeatureSection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFeatureSection from a JSON string
subscription_feature_section_instance = SubscriptionFeatureSection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionFeatureSection.to_json())

# convert the object into a dict
subscription_feature_section_dict = subscription_feature_section_instance.to_dict()
# create an instance of SubscriptionFeatureSection from a dict
subscription_feature_section_from_dict = SubscriptionFeatureSection.from_dict(subscription_feature_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


