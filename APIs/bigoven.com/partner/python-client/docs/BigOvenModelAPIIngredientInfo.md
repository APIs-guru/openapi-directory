# BigOvenModelAPIIngredientInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**department** | **str** |  | [optional] 
**master_ingredient_id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**usually_on_hand** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_ingredient_info import BigOvenModelAPIIngredientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIIngredientInfo from a JSON string
big_oven_model_api_ingredient_info_instance = BigOvenModelAPIIngredientInfo.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIIngredientInfo.to_json())

# convert the object into a dict
big_oven_model_api_ingredient_info_dict = big_oven_model_api_ingredient_info_instance.to_dict()
# create an instance of BigOvenModelAPIIngredientInfo from a dict
big_oven_model_api_ingredient_info_from_dict = BigOvenModelAPIIngredientInfo.from_dict(big_oven_model_api_ingredient_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


