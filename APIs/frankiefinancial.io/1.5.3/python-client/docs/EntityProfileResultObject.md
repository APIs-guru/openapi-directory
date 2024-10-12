# EntityProfileResultObject

Contains the results of a check against an entity profile.   The entityProfileResult will be returned instead of a checkSummary to provide the full details of the verification process. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_recommended** | **str** | The recommended onboarding action for this entity after the profile check this result refers to. The action can also be an entity state set by you. - UNCHECKED: New entity with no checks applied - PASS - FAIL - PASS_MANUAL: Manual intervention was applied to achieve a pass - FAIL_MANUAL: Manual intervention was applied but the entity still fails - REFER: Manual intervention required - WAIT: Externally applied state, waiting for more entity details - ARCHIVED: Externally applied state, entity hidden from on onboarding list - INACTIVE: Externally applied state, entity hidden from on onboarding list, indexes and further changes will be blocked.  | [optional] 
**address_results** | [**Dict[str, EntityProfileItemMatchResultObject]**](EntityProfileItemMatchResultObject.md) | KYC match counts for each checked address, whether matched or not. The keys in this map are the address IDs. The match type in the value will be either \&quot;curr_addr\&quot; or \&quot;prev_addr\&quot;. The resultant structure would look like:      \&quot;addressResults\&quot;: {       \&quot;addressId\&quot;: {         \&quot;matchType\&quot;: \&quot;curr_addr\&quot;,         \&quot;matchCount\&quot;: 5,         \&quot;verified\&quot;: true       },       \&quot;addressId\&quot;: {         \&quot;matchType\&quot;: \&quot;prev_addr\&quot;,         \&quot;matchCount\&quot;: 5,         \&quot;verified\&quot;: true       }     }  | [optional] 
**check_id** | **str** | Unique identifier for every check/comparison/verification. Make sure you reference this ID whenever updating check details. This ID will also be used when pushing check results back to you. | [optional] 
**check_results** | [**List[EntityProfileCheckResultMessage]**](EntityProfileCheckResultMessage.md) | The basic result for each check type required for the profile.  The results are listed in the order they are run so you can also see how far progressed through a check process you are.  | [optional] 
**check_type** | **str** | Comma separated list of checks required for the entity profile. | [optional] 
**credit_header_failures** | **List[str]** | List of vendors from failed credit header sources. | [optional] 
**document_results** | [**Dict[str, EntityProfileItemMatchResultObject]**](EntityProfileItemMatchResultObject.md) | KYC match counts for each checked document, whether matched or not. The keys in this map are the document IDs. The match type in the value will be either \&quot;gov_id\&quot; or \&quot;other_id\&quot;. The resultant structure would look like:  documentResults: {     \&quot;documentId\&quot; : {       \&quot;matchType\&quot;: \&quot;gov_id\&quot;,       \&quot;matchCount\&quot;: 5,       \&quot;verified\&quot;: true     },     \&quot;documentId\&quot;: {       \&quot;matchType\&quot;: \&quot;other_id\&quot;,       \&quot;matchCount\&quot;: 5,       \&quot;verified\&quot;: true     } }  | [optional] 
**entity_id** | **str** | Unique ID for the entity.  | [optional] 
**issue_list** | **List[str]** |  | [optional] 
**kyc_results** | [**List[EntityProfileKYCMatchResultObject]**](EntityProfileKYCMatchResultObject.md) | Summary of KYC match counts. | [optional] 
**latest_check_date** | **datetime** | The date and time of the last check that contributed to this result. | [optional] 
**manual_intervention** | **bool** | Indicates if any manual actions have been involved in the check result. | [optional] 
**policy_name** | **str** | The name of the policy within the profile used for this check. This may or may not incorporate the &#39;riskPolicy&#39; that is also an attribute in this object. | [optional] 
**profile_name** | **str** | The name of the profile used for this check. | [optional] 
**resolver_recommended** | **str** | Workflow hint by arrangement with Frankie | [optional] 
**risk_level** | **str** | Risk level. One of:  - LOW,  - MEDIUM,  - HIGH,  - UACCEPTABLE  - or UNKNOWN  | [optional] 
**risk_policy** | **str** | Risk policy. Contents depend on account configuration but would typically be one of:  - SDD,  - CDD,  - EDD  - or FAIL  | [optional] 

## Example

```python
from openapi_client.models.entity_profile_result_object import EntityProfileResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityProfileResultObject from a JSON string
entity_profile_result_object_instance = EntityProfileResultObject.from_json(json)
# print the JSON string representation of the object
print(EntityProfileResultObject.to_json())

# convert the object into a dict
entity_profile_result_object_dict = entity_profile_result_object_instance.to_dict()
# create an instance of EntityProfileResultObject from a dict
entity_profile_result_object_from_dict = EntityProfileResultObject.from_dict(entity_profile_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


