# ConsistencyPolicy

The consistency policy for the Cosmos DB database account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_consistency_level** | **str** | The default consistency level and configuration settings of the Cosmos DB account. | 
**max_interval_in_seconds** | **int** | When used with the Bounded Staleness consistency level, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400. Required when defaultConsistencyPolicy is set to &#39;BoundedStaleness&#39;. | [optional] 
**max_staleness_prefix** | **int** | When used with the Bounded Staleness consistency level, this value represents the number of stale requests tolerated. Accepted range for this value is 1 – 2,147,483,647. Required when defaultConsistencyPolicy is set to &#39;BoundedStaleness&#39;. | [optional] 

## Example

```python
from openapi_client.models.consistency_policy import ConsistencyPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ConsistencyPolicy from a JSON string
consistency_policy_instance = ConsistencyPolicy.from_json(json)
# print the JSON string representation of the object
print(ConsistencyPolicy.to_json())

# convert the object into a dict
consistency_policy_dict = consistency_policy_instance.to_dict()
# create an instance of ConsistencyPolicy from a dict
consistency_policy_from_dict = ConsistencyPolicy.from_dict(consistency_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


