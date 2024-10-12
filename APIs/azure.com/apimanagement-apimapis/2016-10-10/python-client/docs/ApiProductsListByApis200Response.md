# ApiProductsListByApis200Response

Paged Products list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ApiProductsListByApis200ResponseValueInner]**](ApiProductsListByApis200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.api_products_list_by_apis200_response import ApiProductsListByApis200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiProductsListByApis200Response from a JSON string
api_products_list_by_apis200_response_instance = ApiProductsListByApis200Response.from_json(json)
# print the JSON string representation of the object
print(ApiProductsListByApis200Response.to_json())

# convert the object into a dict
api_products_list_by_apis200_response_dict = api_products_list_by_apis200_response_instance.to_dict()
# create an instance of ApiProductsListByApis200Response from a dict
api_products_list_by_apis200_response_from_dict = ApiProductsListByApis200Response.from_dict(api_products_list_by_apis200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


