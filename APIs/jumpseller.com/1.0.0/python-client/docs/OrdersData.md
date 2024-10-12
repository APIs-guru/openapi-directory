# OrdersData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** |  | [optional] 
**count** | **float** |  | [optional] 
**var_date** | **str** |  | [optional] 
**paid** | **float** | Total amount paid. | [optional] 
**pending** | **float** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.orders_data import OrdersData

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersData from a JSON string
orders_data_instance = OrdersData.from_json(json)
# print the JSON string representation of the object
print(OrdersData.to_json())

# convert the object into a dict
orders_data_dict = orders_data_instance.to_dict()
# create an instance of OrdersData from a dict
orders_data_from_dict = OrdersData.from_dict(orders_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


