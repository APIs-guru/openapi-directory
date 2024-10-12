# ProductListByTagsDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ProductListByTagsDefaultResponseError**](ProductListByTagsDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_list_by_tags_default_response import ProductListByTagsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByTagsDefaultResponse from a JSON string
product_list_by_tags_default_response_instance = ProductListByTagsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ProductListByTagsDefaultResponse.to_json())

# convert the object into a dict
product_list_by_tags_default_response_dict = product_list_by_tags_default_response_instance.to_dict()
# create an instance of ProductListByTagsDefaultResponse from a dict
product_list_by_tags_default_response_from_dict = ProductListByTagsDefaultResponse.from_dict(product_list_by_tags_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


