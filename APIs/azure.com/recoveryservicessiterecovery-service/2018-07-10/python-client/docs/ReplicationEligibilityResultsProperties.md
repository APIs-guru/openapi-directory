# ReplicationEligibilityResultsProperties

Properties model for replication eligibility results API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_request_id** | **str** | The client request Id. | [optional] [readonly] 
**errors** | [**List[ReplicationEligibilityResultsErrorInfo]**](ReplicationEligibilityResultsErrorInfo.md) | The error details. | [optional] 

## Example

```python
from openapi_client.models.replication_eligibility_results_properties import ReplicationEligibilityResultsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationEligibilityResultsProperties from a JSON string
replication_eligibility_results_properties_instance = ReplicationEligibilityResultsProperties.from_json(json)
# print the JSON string representation of the object
print(ReplicationEligibilityResultsProperties.to_json())

# convert the object into a dict
replication_eligibility_results_properties_dict = replication_eligibility_results_properties_instance.to_dict()
# create an instance of ReplicationEligibilityResultsProperties from a dict
replication_eligibility_results_properties_from_dict = ReplicationEligibilityResultsProperties.from_dict(replication_eligibility_results_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


