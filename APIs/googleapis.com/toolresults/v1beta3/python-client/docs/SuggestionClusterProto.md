# SuggestionClusterProto

A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category in which these types of suggestions should appear. Always set. | [optional] 
**suggestions** | [**List[SuggestionProto]**](SuggestionProto.md) | A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent. | [optional] 

## Example

```python
from openapi_client.models.suggestion_cluster_proto import SuggestionClusterProto

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestionClusterProto from a JSON string
suggestion_cluster_proto_instance = SuggestionClusterProto.from_json(json)
# print the JSON string representation of the object
print(SuggestionClusterProto.to_json())

# convert the object into a dict
suggestion_cluster_proto_dict = suggestion_cluster_proto_instance.to_dict()
# create an instance of SuggestionClusterProto from a dict
suggestion_cluster_proto_from_dict = SuggestionClusterProto.from_dict(suggestion_cluster_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


