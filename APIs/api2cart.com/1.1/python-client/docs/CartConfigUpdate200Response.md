# CartConfigUpdate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | **object** |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_config_update200_response import CartConfigUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CartConfigUpdate200Response from a JSON string
cart_config_update200_response_instance = CartConfigUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(CartConfigUpdate200Response.to_json())

# convert the object into a dict
cart_config_update200_response_dict = cart_config_update200_response_instance.to_dict()
# create an instance of CartConfigUpdate200Response from a dict
cart_config_update200_response_from_dict = CartConfigUpdate200Response.from_dict(cart_config_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


