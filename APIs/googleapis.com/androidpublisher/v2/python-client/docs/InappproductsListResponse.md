# InappproductsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inappproduct** | [**List[InAppProduct]**](InAppProduct.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;androidpublisher#inappproductsListResponse\&quot;. | [optional] [default to 'androidpublisher#inappproductsListResponse']
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**token_pagination** | [**TokenPagination**](TokenPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.inappproducts_list_response import InappproductsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InappproductsListResponse from a JSON string
inappproducts_list_response_instance = InappproductsListResponse.from_json(json)
# print the JSON string representation of the object
print(InappproductsListResponse.to_json())

# convert the object into a dict
inappproducts_list_response_dict = inappproducts_list_response_instance.to_dict()
# create an instance of InappproductsListResponse from a dict
inappproducts_list_response_from_dict = InappproductsListResponse.from_dict(inappproducts_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


