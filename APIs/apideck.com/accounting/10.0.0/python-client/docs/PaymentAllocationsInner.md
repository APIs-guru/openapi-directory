# PaymentAllocationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount of payment that should be attributed to this allocation. If null, the total_amount will be used. | [optional] 
**code** | **str** |  | [optional] [readonly] 
**id** | **str** | Unique identifier of entity this payment should be attributed to. | [optional] 
**type** | **str** | Type of entity this payment should be attributed to. | [optional] 

## Example

```python
from openapi_client.models.payment_allocations_inner import PaymentAllocationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentAllocationsInner from a JSON string
payment_allocations_inner_instance = PaymentAllocationsInner.from_json(json)
# print the JSON string representation of the object
print(PaymentAllocationsInner.to_json())

# convert the object into a dict
payment_allocations_inner_dict = payment_allocations_inner_instance.to_dict()
# create an instance of PaymentAllocationsInner from a dict
payment_allocations_inner_from_dict = PaymentAllocationsInner.from_dict(payment_allocations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


