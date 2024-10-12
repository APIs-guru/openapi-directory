# EcommerceOrdersFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer email address to filter on | [optional] 

## Example

```python
from openapi_client.models.ecommerce_orders_filter import EcommerceOrdersFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceOrdersFilter from a JSON string
ecommerce_orders_filter_instance = EcommerceOrdersFilter.from_json(json)
# print the JSON string representation of the object
print(EcommerceOrdersFilter.to_json())

# convert the object into a dict
ecommerce_orders_filter_dict = ecommerce_orders_filter_instance.to_dict()
# create an instance of EcommerceOrdersFilter from a dict
ecommerce_orders_filter_from_dict = EcommerceOrdersFilter.from_dict(ecommerce_orders_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


