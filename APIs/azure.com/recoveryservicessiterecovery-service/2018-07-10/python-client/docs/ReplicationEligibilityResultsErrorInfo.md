# ReplicationEligibilityResultsErrorInfo

Error model that can be exposed to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**possible_causes** | **str** | The possible causes. | [optional] [readonly] 
**recommended_action** | **str** | The recommended action. | [optional] [readonly] 
**status** | **str** | The error status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_eligibility_results_error_info import ReplicationEligibilityResultsErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationEligibilityResultsErrorInfo from a JSON string
replication_eligibility_results_error_info_instance = ReplicationEligibilityResultsErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ReplicationEligibilityResultsErrorInfo.to_json())

# convert the object into a dict
replication_eligibility_results_error_info_dict = replication_eligibility_results_error_info_instance.to_dict()
# create an instance of ReplicationEligibilityResultsErrorInfo from a dict
replication_eligibility_results_error_info_from_dict = ReplicationEligibilityResultsErrorInfo.from_dict(replication_eligibility_results_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


