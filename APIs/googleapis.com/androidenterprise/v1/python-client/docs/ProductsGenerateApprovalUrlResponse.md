# ProductsGenerateApprovalUrlResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted. | [optional] 

## Example

```python
from openapi_client.models.products_generate_approval_url_response import ProductsGenerateApprovalUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsGenerateApprovalUrlResponse from a JSON string
products_generate_approval_url_response_instance = ProductsGenerateApprovalUrlResponse.from_json(json)
# print the JSON string representation of the object
print(ProductsGenerateApprovalUrlResponse.to_json())

# convert the object into a dict
products_generate_approval_url_response_dict = products_generate_approval_url_response_instance.to_dict()
# create an instance of ProductsGenerateApprovalUrlResponse from a dict
products_generate_approval_url_response_from_dict = ProductsGenerateApprovalUrlResponse.from_dict(products_generate_approval_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


