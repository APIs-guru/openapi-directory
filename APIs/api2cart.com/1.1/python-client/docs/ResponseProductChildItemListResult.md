# ResponseProductChildItemListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**children** | [**List[Child]**](Child.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_product_child_item_list_result import ResponseProductChildItemListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseProductChildItemListResult from a JSON string
response_product_child_item_list_result_instance = ResponseProductChildItemListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseProductChildItemListResult.to_json())

# convert the object into a dict
response_product_child_item_list_result_dict = response_product_child_item_list_result_instance.to_dict()
# create an instance of ResponseProductChildItemListResult from a dict
response_product_child_item_list_result_from_dict = ResponseProductChildItemListResult.from_dict(response_product_child_item_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


