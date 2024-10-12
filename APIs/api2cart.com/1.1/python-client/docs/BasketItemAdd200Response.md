# BasketItemAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**BasketItemAdd200ResponseResult**](BasketItemAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basket_item_add200_response import BasketItemAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BasketItemAdd200Response from a JSON string
basket_item_add200_response_instance = BasketItemAdd200Response.from_json(json)
# print the JSON string representation of the object
print(BasketItemAdd200Response.to_json())

# convert the object into a dict
basket_item_add200_response_dict = basket_item_add200_response_instance.to_dict()
# create an instance of BasketItemAdd200Response from a dict
basket_item_add200_response_from_dict = BasketItemAdd200Response.from_dict(basket_item_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


