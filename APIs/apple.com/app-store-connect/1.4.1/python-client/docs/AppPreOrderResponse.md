# AppPreOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPreOrder**](AppPreOrder.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_pre_order_response import AppPreOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPreOrderResponse from a JSON string
app_pre_order_response_instance = AppPreOrderResponse.from_json(json)
# print the JSON string representation of the object
print(AppPreOrderResponse.to_json())

# convert the object into a dict
app_pre_order_response_dict = app_pre_order_response_instance.to_dict()
# create an instance of AppPreOrderResponse from a dict
app_pre_order_response_from_dict = AppPreOrderResponse.from_dict(app_pre_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


