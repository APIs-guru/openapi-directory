# PosPaymentProcessingFeesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**effective_at** | **datetime** |  | [optional] 
**processing_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pos_payment_processing_fees_inner import PosPaymentProcessingFeesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PosPaymentProcessingFeesInner from a JSON string
pos_payment_processing_fees_inner_instance = PosPaymentProcessingFeesInner.from_json(json)
# print the JSON string representation of the object
print(PosPaymentProcessingFeesInner.to_json())

# convert the object into a dict
pos_payment_processing_fees_inner_dict = pos_payment_processing_fees_inner_instance.to_dict()
# create an instance of PosPaymentProcessingFeesInner from a dict
pos_payment_processing_fees_inner_from_dict = PosPaymentProcessingFeesInner.from_dict(pos_payment_processing_fees_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


