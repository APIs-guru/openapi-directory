# GymDTO

The GymDTO Class. Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_gym_number** | **int** |  | [optional] 
**gym_id** | **int** |  | [optional] 
**gym_name** | **str** |  | [optional] 
**location** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.gym_dto import GymDTO

# TODO update the JSON string below
json = "{}"
# create an instance of GymDTO from a JSON string
gym_dto_instance = GymDTO.from_json(json)
# print the JSON string representation of the object
print(GymDTO.to_json())

# convert the object into a dict
gym_dto_dict = gym_dto_instance.to_dict()
# create an instance of GymDTO from a dict
gym_dto_from_dict = GymDTO.from_dict(gym_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


