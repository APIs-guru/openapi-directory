# OrderMerchantProvidedAnnotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key for additional merchant provided (as key-value pairs) annotation about the line item. | [optional] 
**value** | **str** | Value for additional merchant provided (as key-value pairs) annotation about the line item. | [optional] 

## Example

```python
from openapi_client.models.order_merchant_provided_annotation import OrderMerchantProvidedAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of OrderMerchantProvidedAnnotation from a JSON string
order_merchant_provided_annotation_instance = OrderMerchantProvidedAnnotation.from_json(json)
# print the JSON string representation of the object
print(OrderMerchantProvidedAnnotation.to_json())

# convert the object into a dict
order_merchant_provided_annotation_dict = order_merchant_provided_annotation_instance.to_dict()
# create an instance of OrderMerchantProvidedAnnotation from a dict
order_merchant_provided_annotation_from_dict = OrderMerchantProvidedAnnotation.from_dict(order_merchant_provided_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


