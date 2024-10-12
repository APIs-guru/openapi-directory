# EcommerceCustomersFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Customer email address to filter on | [optional] 
**phone_number** | **str** | Customer phone number to filter on | [optional] 

## Example

```python
from openapi_client.models.ecommerce_customers_filter import EcommerceCustomersFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EcommerceCustomersFilter from a JSON string
ecommerce_customers_filter_instance = EcommerceCustomersFilter.from_json(json)
# print the JSON string representation of the object
print(EcommerceCustomersFilter.to_json())

# convert the object into a dict
ecommerce_customers_filter_dict = ecommerce_customers_filter_instance.to_dict()
# create an instance of EcommerceCustomersFilter from a dict
ecommerce_customers_filter_from_dict = EcommerceCustomersFilter.from_dict(ecommerce_customers_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


