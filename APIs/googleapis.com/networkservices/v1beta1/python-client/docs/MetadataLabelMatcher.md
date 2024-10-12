# MetadataLabelMatcher

The matcher that is based on node metadata presented by xDS clients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_label_match_criteria** | **str** | Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), pick up the one with older creation time. | [optional] 
**metadata_labels** | [**List[MetadataLabels]**](MetadataLabels.md) | The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list can have at most 64 entries. The list can be empty if the match criteria is MATCH_ANY, to specify a wildcard match (i.e this matches any client). | [optional] 

## Example

```python
from openapi_client.models.metadata_label_matcher import MetadataLabelMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataLabelMatcher from a JSON string
metadata_label_matcher_instance = MetadataLabelMatcher.from_json(json)
# print the JSON string representation of the object
print(MetadataLabelMatcher.to_json())

# convert the object into a dict
metadata_label_matcher_dict = metadata_label_matcher_instance.to_dict()
# create an instance of MetadataLabelMatcher from a dict
metadata_label_matcher_from_dict = MetadataLabelMatcher.from_dict(metadata_label_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


