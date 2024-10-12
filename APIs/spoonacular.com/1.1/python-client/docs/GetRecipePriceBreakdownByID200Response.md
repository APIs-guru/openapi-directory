# GetRecipePriceBreakdownByID200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredients** | [**List[GetRecipePriceBreakdownByID200ResponseIngredientsInner]**](GetRecipePriceBreakdownByID200ResponseIngredientsInner.md) |  | 
**total_cost** | **float** |  | 
**total_cost_per_serving** | **float** |  | 

## Example

```python
from openapi_client.models.get_recipe_price_breakdown_by_id200_response import GetRecipePriceBreakdownByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecipePriceBreakdownByID200Response from a JSON string
get_recipe_price_breakdown_by_id200_response_instance = GetRecipePriceBreakdownByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetRecipePriceBreakdownByID200Response.to_json())

# convert the object into a dict
get_recipe_price_breakdown_by_id200_response_dict = get_recipe_price_breakdown_by_id200_response_instance.to_dict()
# create an instance of GetRecipePriceBreakdownByID200Response from a dict
get_recipe_price_breakdown_by_id200_response_from_dict = GetRecipePriceBreakdownByID200Response.from_dict(get_recipe_price_breakdown_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


