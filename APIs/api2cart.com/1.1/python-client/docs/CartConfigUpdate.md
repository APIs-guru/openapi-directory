# CartConfigUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fields** | **object** | This parameter sets the list of params to the shopping cart. | [optional] 
**db_tables_prefix** | **str** | This parameter is deprecated for this method. Please, use this parameter in method account.config.update | [optional] 
**store_id** | **str** | Store Id | [optional] 

## Example

```python
from openapi_client.models.cart_config_update import CartConfigUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CartConfigUpdate from a JSON string
cart_config_update_instance = CartConfigUpdate.from_json(json)
# print the JSON string representation of the object
print(CartConfigUpdate.to_json())

# convert the object into a dict
cart_config_update_dict = cart_config_update_instance.to_dict()
# create an instance of CartConfigUpdate from a dict
cart_config_update_from_dict = CartConfigUpdate.from_dict(cart_config_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


