# CreativeServingRestrictionsInnerContextsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auction_type** | **List[str]** | Only set when contextType&#x3D;AUCTION_TYPE. Represents the auction types this restriction applies to. | [optional] 
**context_type** | **str** | The type of context (e.g., location, platform, auction type, SSL-ness). | [optional] 
**geo_criteria_id** | **List[int]** | Only set when contextType&#x3D;LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId. | [optional] 
**platform** | **List[str]** | Only set when contextType&#x3D;PLATFORM. Represents the platforms this restriction applies to. | [optional] 

## Example

```python
from openapi_client.models.creative_serving_restrictions_inner_contexts_inner import CreativeServingRestrictionsInnerContextsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeServingRestrictionsInnerContextsInner from a JSON string
creative_serving_restrictions_inner_contexts_inner_instance = CreativeServingRestrictionsInnerContextsInner.from_json(json)
# print the JSON string representation of the object
print(CreativeServingRestrictionsInnerContextsInner.to_json())

# convert the object into a dict
creative_serving_restrictions_inner_contexts_inner_dict = creative_serving_restrictions_inner_contexts_inner_instance.to_dict()
# create an instance of CreativeServingRestrictionsInnerContextsInner from a dict
creative_serving_restrictions_inner_contexts_inner_from_dict = CreativeServingRestrictionsInnerContextsInner.from_dict(creative_serving_restrictions_inner_contexts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


