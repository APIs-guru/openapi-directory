# ProductChildItemInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Child**](Child.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_child_item_info200_response import ProductChildItemInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductChildItemInfo200Response from a JSON string
product_child_item_info200_response_instance = ProductChildItemInfo200Response.from_json(json)
# print the JSON string representation of the object
print(ProductChildItemInfo200Response.to_json())

# convert the object into a dict
product_child_item_info200_response_dict = product_child_item_info200_response_instance.to_dict()
# create an instance of ProductChildItemInfo200Response from a dict
product_child_item_info200_response_from_dict = ProductChildItemInfo200Response.from_dict(product_child_item_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


