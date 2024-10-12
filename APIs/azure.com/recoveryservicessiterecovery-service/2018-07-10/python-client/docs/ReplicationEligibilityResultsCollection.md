# ReplicationEligibilityResultsCollection

Replication eligibility results collection response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReplicationEligibilityResults]**](ReplicationEligibilityResults.md) | The replication eligibility results details. | [optional] 

## Example

```python
from openapi_client.models.replication_eligibility_results_collection import ReplicationEligibilityResultsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationEligibilityResultsCollection from a JSON string
replication_eligibility_results_collection_instance = ReplicationEligibilityResultsCollection.from_json(json)
# print the JSON string representation of the object
print(ReplicationEligibilityResultsCollection.to_json())

# convert the object into a dict
replication_eligibility_results_collection_dict = replication_eligibility_results_collection_instance.to_dict()
# create an instance of ReplicationEligibilityResultsCollection from a dict
replication_eligibility_results_collection_from_dict = ReplicationEligibilityResultsCollection.from_dict(replication_eligibility_results_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


