# EntityProfileKYCMatchResultObjectMatchTypesValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checked** | **bool** | True if an attempt was made to verify | [optional] 
**match_count** | **int** | Number of distinct matches for this match type. Note that for government ID (gov_id) this is the count of matched documents, not sources.  | [optional] 
**match_sources** | **List[str]** | List of sources that matched. Note that the matchCount is not always a count of the matchSources. Particularly for gov_id, the count is the number of distinct documents matched, not the number of sources.  | [optional] 
**verified** | **bool** | True if there is at least one match | [optional] 

## Example

```python
from openapi_client.models.entity_profile_kyc_match_result_object_match_types_value import EntityProfileKYCMatchResultObjectMatchTypesValue

# TODO update the JSON string below
json = "{}"
# create an instance of EntityProfileKYCMatchResultObjectMatchTypesValue from a JSON string
entity_profile_kyc_match_result_object_match_types_value_instance = EntityProfileKYCMatchResultObjectMatchTypesValue.from_json(json)
# print the JSON string representation of the object
print(EntityProfileKYCMatchResultObjectMatchTypesValue.to_json())

# convert the object into a dict
entity_profile_kyc_match_result_object_match_types_value_dict = entity_profile_kyc_match_result_object_match_types_value_instance.to_dict()
# create an instance of EntityProfileKYCMatchResultObjectMatchTypesValue from a dict
entity_profile_kyc_match_result_object_match_types_value_from_dict = EntityProfileKYCMatchResultObjectMatchTypesValue.from_dict(entity_profile_kyc_match_result_object_match_types_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


