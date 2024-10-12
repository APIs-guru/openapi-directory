# SearchCustomFoods200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_foods** | [**List[SearchCustomFoods200ResponseCustomFoodsInner]**](SearchCustomFoods200ResponseCustomFoodsInner.md) |  | 
**number** | **int** |  | 
**offset** | **int** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.search_custom_foods200_response import SearchCustomFoods200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchCustomFoods200Response from a JSON string
search_custom_foods200_response_instance = SearchCustomFoods200Response.from_json(json)
# print the JSON string representation of the object
print(SearchCustomFoods200Response.to_json())

# convert the object into a dict
search_custom_foods200_response_dict = search_custom_foods200_response_instance.to_dict()
# create an instance of SearchCustomFoods200Response from a dict
search_custom_foods200_response_from_dict = SearchCustomFoods200Response.from_dict(search_custom_foods200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


