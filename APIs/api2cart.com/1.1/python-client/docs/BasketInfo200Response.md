# BasketInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Basket**](Basket.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.basket_info200_response import BasketInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BasketInfo200Response from a JSON string
basket_info200_response_instance = BasketInfo200Response.from_json(json)
# print the JSON string representation of the object
print(BasketInfo200Response.to_json())

# convert the object into a dict
basket_info200_response_dict = basket_info200_response_instance.to_dict()
# create an instance of BasketInfo200Response from a dict
basket_info200_response_from_dict = BasketInfo200Response.from_dict(basket_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


