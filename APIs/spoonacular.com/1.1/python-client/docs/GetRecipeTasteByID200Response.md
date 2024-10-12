# GetRecipeTasteByID200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitterness** | **float** |  | 
**fattiness** | **float** |  | 
**saltiness** | **float** |  | 
**savoriness** | **float** |  | 
**sourness** | **float** |  | 
**spiciness** | **float** |  | 
**sweetness** | **float** |  | 

## Example

```python
from openapi_client.models.get_recipe_taste_by_id200_response import GetRecipeTasteByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecipeTasteByID200Response from a JSON string
get_recipe_taste_by_id200_response_instance = GetRecipeTasteByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetRecipeTasteByID200Response.to_json())

# convert the object into a dict
get_recipe_taste_by_id200_response_dict = get_recipe_taste_by_id200_response_instance.to_dict()
# create an instance of GetRecipeTasteByID200Response from a dict
get_recipe_taste_by_id200_response_from_dict = GetRecipeTasteByID200Response.from_dict(get_recipe_taste_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


