# CategoryListResponse

A third party list metagame categories response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Category]**](Category.md) | The list of categories with usage data. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#categoryListResponse&#x60;. | [optional] 
**next_page_token** | **str** | Token corresponding to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.category_list_response import CategoryListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryListResponse from a JSON string
category_list_response_instance = CategoryListResponse.from_json(json)
# print the JSON string representation of the object
print(CategoryListResponse.to_json())

# convert the object into a dict
category_list_response_dict = category_list_response_instance.to_dict()
# create an instance of CategoryListResponse from a dict
category_list_response_from_dict = CategoryListResponse.from_dict(category_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


