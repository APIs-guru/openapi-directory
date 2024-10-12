# ReputationHistoryInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **int** |  | [optional] 
**post_id** | **int** |  | [optional] 
**reputation_change** | **int** |  | [optional] 
**reputation_history_type** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.reputation_history_inner import ReputationHistoryInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReputationHistoryInner from a JSON string
reputation_history_inner_instance = ReputationHistoryInner.from_json(json)
# print the JSON string representation of the object
print(ReputationHistoryInner.to_json())

# convert the object into a dict
reputation_history_inner_dict = reputation_history_inner_instance.to_dict()
# create an instance of ReputationHistoryInner from a dict
reputation_history_inner_from_dict = ReputationHistoryInner.from_dict(reputation_history_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


