# ListBusinessCategoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[Category]**](Category.md) | The categories. Categories are BASIC view. They don&#39;t contain any ServiceType information. | [optional] 
**next_page_token** | **str** | If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to &#x60;ListBusinessCategories&#x60;. | [optional] 
**total_category_count** | **int** | The total number of categories for the request parameters. | [optional] 

## Example

```python
from openapi_client.models.list_business_categories_response import ListBusinessCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBusinessCategoriesResponse from a JSON string
list_business_categories_response_instance = ListBusinessCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListBusinessCategoriesResponse.to_json())

# convert the object into a dict
list_business_categories_response_dict = list_business_categories_response_instance.to_dict()
# create an instance of ListBusinessCategoriesResponse from a dict
list_business_categories_response_from_dict = ListBusinessCategoriesResponse.from_dict(list_business_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


