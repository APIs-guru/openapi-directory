# ResponseOrderPreestimateShippingListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**preestimate_shippings** | [**List[OrderPreestimateShipping]**](OrderPreestimateShipping.md) |  | [optional] 
**preestimate_shippings_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_order_preestimate_shipping_list_result import ResponseOrderPreestimateShippingListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseOrderPreestimateShippingListResult from a JSON string
response_order_preestimate_shipping_list_result_instance = ResponseOrderPreestimateShippingListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseOrderPreestimateShippingListResult.to_json())

# convert the object into a dict
response_order_preestimate_shipping_list_result_dict = response_order_preestimate_shipping_list_result_instance.to_dict()
# create an instance of ResponseOrderPreestimateShippingListResult from a dict
response_order_preestimate_shipping_list_result_from_dict = ResponseOrderPreestimateShippingListResult.from_dict(response_order_preestimate_shipping_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


