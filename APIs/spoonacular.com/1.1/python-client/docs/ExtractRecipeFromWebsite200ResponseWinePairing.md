# ExtractRecipeFromWebsite200ResponseWinePairing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paired_wines** | **List[str]** |  | 
**pairing_text** | **str** |  | 
**product_matches** | [**List[GetWineRecommendation200ResponseRecommendedWinesInner]**](GetWineRecommendation200ResponseRecommendedWinesInner.md) |  | 

## Example

```python
from openapi_client.models.extract_recipe_from_website200_response_wine_pairing import ExtractRecipeFromWebsite200ResponseWinePairing

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractRecipeFromWebsite200ResponseWinePairing from a JSON string
extract_recipe_from_website200_response_wine_pairing_instance = ExtractRecipeFromWebsite200ResponseWinePairing.from_json(json)
# print the JSON string representation of the object
print(ExtractRecipeFromWebsite200ResponseWinePairing.to_json())

# convert the object into a dict
extract_recipe_from_website200_response_wine_pairing_dict = extract_recipe_from_website200_response_wine_pairing_instance.to_dict()
# create an instance of ExtractRecipeFromWebsite200ResponseWinePairing from a dict
extract_recipe_from_website200_response_wine_pairing_from_dict = ExtractRecipeFromWebsite200ResponseWinePairing.from_dict(extract_recipe_from_website200_response_wine_pairing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


