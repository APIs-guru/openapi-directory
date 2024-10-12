# InAppPurchaseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**InAppPurchase**](InAppPurchase.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.in_app_purchase_response import InAppPurchaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InAppPurchaseResponse from a JSON string
in_app_purchase_response_instance = InAppPurchaseResponse.from_json(json)
# print the JSON string representation of the object
print(InAppPurchaseResponse.to_json())

# convert the object into a dict
in_app_purchase_response_dict = in_app_purchase_response_instance.to_dict()
# create an instance of InAppPurchaseResponse from a dict
in_app_purchase_response_from_dict = InAppPurchaseResponse.from_dict(in_app_purchase_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


