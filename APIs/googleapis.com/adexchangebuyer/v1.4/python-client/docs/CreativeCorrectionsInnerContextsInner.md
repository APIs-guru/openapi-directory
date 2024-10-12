# CreativeCorrectionsInnerContextsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auction_type** | **List[str]** | Only set when contextType&#x3D;AUCTION_TYPE. Represents the auction types this correction applies to. | [optional] 
**context_type** | **str** | The type of context (e.g., location, platform, auction type, SSL-ness). | [optional] 
**geo_criteria_id** | **List[int]** | Only set when contextType&#x3D;LOCATION. Represents the geo criterias this correction applies to. | [optional] 
**platform** | **List[str]** | Only set when contextType&#x3D;PLATFORM. Represents the platforms this correction applies to. | [optional] 

## Example

```python
from openapi_client.models.creative_corrections_inner_contexts_inner import CreativeCorrectionsInnerContextsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeCorrectionsInnerContextsInner from a JSON string
creative_corrections_inner_contexts_inner_instance = CreativeCorrectionsInnerContextsInner.from_json(json)
# print the JSON string representation of the object
print(CreativeCorrectionsInnerContextsInner.to_json())

# convert the object into a dict
creative_corrections_inner_contexts_inner_dict = creative_corrections_inner_contexts_inner_instance.to_dict()
# create an instance of CreativeCorrectionsInnerContextsInner from a dict
creative_corrections_inner_contexts_inner_from_dict = CreativeCorrectionsInnerContextsInner.from_dict(creative_corrections_inner_contexts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


