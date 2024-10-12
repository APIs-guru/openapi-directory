# ReplicationEligibilityResults

Replication eligibility results response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets Unique ARM identifier for this object. | [optional] [readonly] 
**name** | **str** | Gets the name of this object. | [optional] [readonly] 
**properties** | [**ReplicationEligibilityResultsProperties**](ReplicationEligibilityResultsProperties.md) |  | [optional] 
**type** | **str** | Gets the object type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_eligibility_results import ReplicationEligibilityResults

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationEligibilityResults from a JSON string
replication_eligibility_results_instance = ReplicationEligibilityResults.from_json(json)
# print the JSON string representation of the object
print(ReplicationEligibilityResults.to_json())

# convert the object into a dict
replication_eligibility_results_dict = replication_eligibility_results_instance.to_dict()
# create an instance of ReplicationEligibilityResults from a dict
replication_eligibility_results_from_dict = ReplicationEligibilityResults.from_dict(replication_eligibility_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


