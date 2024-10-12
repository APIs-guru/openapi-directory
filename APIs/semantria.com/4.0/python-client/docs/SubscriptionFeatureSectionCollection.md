# SubscriptionFeatureSectionCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concept_topics** | **bool** | Indicates whether concept topics are allowed or not | 
**facets** | **bool** | Indicates whether facets extraction feature is allowed or not | 
**mentions** | **bool** | Indicates whether mentions are allowed for facets and attributes or not | 
**named_entities** | **bool** | Indicates whether named entities feature is allowed or not | 
**query_topics** | **bool** | Indicates whether query defined topics are allowed or not | 
**themes** | **bool** | Indicates whether themes extraction feature is allowed or not | 
**user_entities** | **bool** | Indicates whether user entities feature is allowed or not | 

## Example

```python
from openapi_client.models.subscription_feature_section_collection import SubscriptionFeatureSectionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionFeatureSectionCollection from a JSON string
subscription_feature_section_collection_instance = SubscriptionFeatureSectionCollection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionFeatureSectionCollection.to_json())

# convert the object into a dict
subscription_feature_section_collection_dict = subscription_feature_section_collection_instance.to_dict()
# create an instance of SubscriptionFeatureSectionCollection from a dict
subscription_feature_section_collection_from_dict = SubscriptionFeatureSectionCollection.from_dict(subscription_feature_section_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


