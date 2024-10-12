# ReputationChangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** |  | [optional] 
**on_date** | **int** |  | [optional] 
**post_id** | **int** |  | [optional] 
**post_type** | **str** |  | [optional] 
**reputation_change** | **int** |  | [optional] 
**title** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 
**vote_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.reputation_changes_inner import ReputationChangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReputationChangesInner from a JSON string
reputation_changes_inner_instance = ReputationChangesInner.from_json(json)
# print the JSON string representation of the object
print(ReputationChangesInner.to_json())

# convert the object into a dict
reputation_changes_inner_dict = reputation_changes_inner_instance.to_dict()
# create an instance of ReputationChangesInner from a dict
reputation_changes_inner_from_dict = ReputationChangesInner.from_dict(reputation_changes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


