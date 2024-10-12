# NameMatchCandidateOut

The ordered list of name matching candidates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidate_name** | **str** | The name matching candidate name | [optional] 
**pred_score_family_name** | **float** | The family name prediction score. | [optional] 
**pred_score_given_name** | **float** | The given name prediction score. | [optional] 
**probability** | **float** | The name matching estimated probability. | [optional] 

## Example

```python
from openapi_client.models.name_match_candidate_out import NameMatchCandidateOut

# TODO update the JSON string below
json = "{}"
# create an instance of NameMatchCandidateOut from a JSON string
name_match_candidate_out_instance = NameMatchCandidateOut.from_json(json)
# print the JSON string representation of the object
print(NameMatchCandidateOut.to_json())

# convert the object into a dict
name_match_candidate_out_dict = name_match_candidate_out_instance.to_dict()
# create an instance of NameMatchCandidateOut from a dict
name_match_candidate_out_from_dict = NameMatchCandidateOut.from_dict(name_match_candidate_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


