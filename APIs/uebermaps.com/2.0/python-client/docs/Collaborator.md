# Collaborator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**group** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**is_admin** | **bool** |  | [optional] 
**map** | [**Map**](Map.md) |  | [optional] 
**map_id** | **int** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.collaborator import Collaborator

# TODO update the JSON string below
json = "{}"
# create an instance of Collaborator from a JSON string
collaborator_instance = Collaborator.from_json(json)
# print the JSON string representation of the object
print(Collaborator.to_json())

# convert the object into a dict
collaborator_dict = collaborator_instance.to_dict()
# create an instance of Collaborator from a dict
collaborator_from_dict = Collaborator.from_dict(collaborator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


