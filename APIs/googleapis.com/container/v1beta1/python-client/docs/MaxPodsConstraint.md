# MaxPodsConstraint

Constraints applied to pods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_pods_per_node** | **str** | Constraint enforced on the max num of pods per node. | [optional] 

## Example

```python
from openapi_client.models.max_pods_constraint import MaxPodsConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of MaxPodsConstraint from a JSON string
max_pods_constraint_instance = MaxPodsConstraint.from_json(json)
# print the JSON string representation of the object
print(MaxPodsConstraint.to_json())

# convert the object into a dict
max_pods_constraint_dict = max_pods_constraint_instance.to_dict()
# create an instance of MaxPodsConstraint from a dict
max_pods_constraint_from_dict = MaxPodsConstraint.from_dict(max_pods_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


