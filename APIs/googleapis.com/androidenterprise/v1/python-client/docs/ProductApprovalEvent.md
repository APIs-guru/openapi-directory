# ProductApprovalEvent

An event generated when a product's approval status is changed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **str** | Whether the product was approved or unapproved. This field will always be present. | [optional] 
**product_id** | **str** | The id of the product (e.g. \&quot;app:com.google.android.gm\&quot;) for which the approval status has changed. This field will always be present. | [optional] 

## Example

```python
from openapi_client.models.product_approval_event import ProductApprovalEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ProductApprovalEvent from a JSON string
product_approval_event_instance = ProductApprovalEvent.from_json(json)
# print the JSON string representation of the object
print(ProductApprovalEvent.to_json())

# convert the object into a dict
product_approval_event_dict = product_approval_event_instance.to_dict()
# create an instance of ProductApprovalEvent from a dict
product_approval_event_from_dict = ProductApprovalEvent.from_dict(product_approval_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


