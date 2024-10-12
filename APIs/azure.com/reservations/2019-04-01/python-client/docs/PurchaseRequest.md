# PurchaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The Azure Region where the reserved resource lives. | [optional] 
**properties** | [**PurchaseRequestProperties**](PurchaseRequestProperties.md) |  | [optional] 
**sku** | [**SkuName**](SkuName.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_request import PurchaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseRequest from a JSON string
purchase_request_instance = PurchaseRequest.from_json(json)
# print the JSON string representation of the object
print(PurchaseRequest.to_json())

# convert the object into a dict
purchase_request_dict = purchase_request_instance.to_dict()
# create an instance of PurchaseRequest from a dict
purchase_request_from_dict = PurchaseRequest.from_dict(purchase_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


