# CheckEntityCheckResultObject

Describes all of the checks that were carried out against an entity as part of our cascading check process. Because there are a number of steps involved in checking an entity, (including the use of past checks done by you or others), there is an overall summary check result that will tell you the final disposition of the the check you requested.  So if you requested a 2+2+governmentID+pep/sanctions/etc (i.e. everything) then there would have been several checks done in order to meet this requirement. Some may have even failed, but eventually we got there. The summary gives the final assessment, based on all available data.  Detailed writeups on how this all works can be found here:   https://apidocs.frankiefinancial.com/docs/understanding-checksummary-results 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blacklist_check_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) | Collection of check results for the entity having been previously blacklisted.  An array of matched blacklisted entities sorted by match confidence level (highest first).  | [optional] 
**check_results_list_summaries** | [**List[ProcessResultObject]**](ProcessResultObject.md) | Contains a list of all checkSummary records (one for each check) | [optional] 
**check_risk** | [**ProcessResultObject**](ProcessResultObject.md) |  | [optional] 
**check_summary** | [**ProcessResultObject**](ProcessResultObject.md) |  | [optional] 
**device_check_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) | We can perform a number of device checks on an entity, such as those from ThreatMetrix and/or BioCatch. If one of these checks was incorporated into the ID check, then these will appear here.  | [optional] 
**duplicate_check_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) | Collection of check results for the entity having previously been checked.  An array of matched checked entities sorted by match confidence level (highest first).  | [optional] 
**entity** | [**EntityObject**](EntityObject.md) |  | [optional] 
**entity_profile_result** | [**EntityProfileResultObject**](EntityProfileResultObject.md) |  | [optional] 
**entity_result** | [**CheckEntityCheckResultObjectEntityResult**](CheckEntityCheckResultObjectEntityResult.md) |  | [optional] 
**fraud_check_results** | [**FraudCheckResultObject**](FraudCheckResultObject.md) |  | [optional] 
**manual_check_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) | Collection of check results for the manual KYC.  An array of one entry with the manual check result.  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 
**shared_blocklist_check_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) | Collection of check results for the entity having been previously blacklisted in shared blocklist.  An array of matched blacklisted entities sorted by match confidence level (highest first).  | [optional] 

## Example

```python
from openapi_client.models.check_entity_check_result_object import CheckEntityCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of CheckEntityCheckResultObject from a JSON string
check_entity_check_result_object_instance = CheckEntityCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(CheckEntityCheckResultObject.to_json())

# convert the object into a dict
check_entity_check_result_object_dict = check_entity_check_result_object_instance.to_dict()
# create an instance of CheckEntityCheckResultObject from a dict
check_entity_check_result_object_from_dict = CheckEntityCheckResultObject.from_dict(check_entity_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


