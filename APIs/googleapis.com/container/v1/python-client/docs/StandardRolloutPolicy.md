# StandardRolloutPolicy

Standard rollout policy is the default policy for blue-green.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_node_count** | **int** | Number of blue nodes to drain in a batch. | [optional] 
**batch_percentage** | **float** | Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0]. | [optional] 
**batch_soak_duration** | **str** | Soak time after each batch gets drained. Default to zero. | [optional] 

## Example

```python
from openapi_client.models.standard_rollout_policy import StandardRolloutPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of StandardRolloutPolicy from a JSON string
standard_rollout_policy_instance = StandardRolloutPolicy.from_json(json)
# print the JSON string representation of the object
print(StandardRolloutPolicy.to_json())

# convert the object into a dict
standard_rollout_policy_dict = standard_rollout_policy_instance.to_dict()
# create an instance of StandardRolloutPolicy from a dict
standard_rollout_policy_from_dict = StandardRolloutPolicy.from_dict(standard_rollout_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


