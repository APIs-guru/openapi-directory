# GetRecipeEquipmentByID200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equipment** | [**List[GetRecipeEquipmentByID200ResponseEquipmentInner]**](GetRecipeEquipmentByID200ResponseEquipmentInner.md) |  | 

## Example

```python
from openapi_client.models.get_recipe_equipment_by_id200_response import GetRecipeEquipmentByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecipeEquipmentByID200Response from a JSON string
get_recipe_equipment_by_id200_response_instance = GetRecipeEquipmentByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetRecipeEquipmentByID200Response.to_json())

# convert the object into a dict
get_recipe_equipment_by_id200_response_dict = get_recipe_equipment_by_id200_response_instance.to_dict()
# create an instance of GetRecipeEquipmentByID200Response from a dict
get_recipe_equipment_by_id200_response_from_dict = GetRecipeEquipmentByID200Response.from_dict(get_recipe_equipment_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


