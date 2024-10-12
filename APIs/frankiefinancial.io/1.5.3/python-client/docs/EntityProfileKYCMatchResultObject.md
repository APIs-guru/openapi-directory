# EntityProfileKYCMatchResultObject

Summary of all KYC matches

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_count** | **int** | Number of matches for this set of match types. In other words the sum of the matchCounts in the matchTypes map. Note that for match sets that include government ID (gov_id) this will not neccessaily be the count of matched sources.  | [optional] 
**match_count_required** | **int** | Number of distinct matches (sources and/or matched government ID documents) required for this set of match types.  | [optional] 
**match_types** | [**Dict[str, EntityProfileKYCMatchResultObjectMatchTypesValue]**](EntityProfileKYCMatchResultObjectMatchTypesValue.md) | The match types that this overall count and result refer to. Currently one or more of: - name - address - dob - gender - gov_id - other_id  These will be keys in a map whose values hold the values for the individual match types. The resultant structure would look like the following. Here dob has zero matches and is not verfied but it was check, so other than the checked flag the value object is simply empty. A completely empty object would imply that match type was not checked.      \&quot;matchTypes\&quot;: {       \&quot;address\&quot;: {         \&quot;matchCount\&quot;: 1,         \&quot;matchSources\&quot;: [ \&quot;au-elec-roll\&quot; ],         \&quot;checked\&quot;: true,         \&quot;verified\&quot;: true       },       \&quot;dob\&quot;: {         \&quot;checked\&quot;: true       }     }  So for a one_plus KYC check there will be two EntityProfileKYCMatchResultObject records. One for &#39;name&#39; and one for &#39;address, dob&#39; (like the sample above).  | [optional] 
**verified** | **bool** | True if there are enough matches to meet the requirement | [optional] 

## Example

```python
from openapi_client.models.entity_profile_kyc_match_result_object import EntityProfileKYCMatchResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityProfileKYCMatchResultObject from a JSON string
entity_profile_kyc_match_result_object_instance = EntityProfileKYCMatchResultObject.from_json(json)
# print the JSON string representation of the object
print(EntityProfileKYCMatchResultObject.to_json())

# convert the object into a dict
entity_profile_kyc_match_result_object_dict = entity_profile_kyc_match_result_object_instance.to_dict()
# create an instance of EntityProfileKYCMatchResultObject from a dict
entity_profile_kyc_match_result_object_from_dict = EntityProfileKYCMatchResultObject.from_dict(entity_profile_kyc_match_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


