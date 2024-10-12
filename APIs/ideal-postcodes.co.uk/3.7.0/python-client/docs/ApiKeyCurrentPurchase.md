# ApiKeyCurrentPurchase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumed** | **int** | Number of consumed lookups off this purchase. | 
**expires** | **str** | &#x60;string&#x60; or &#x60;null&#x60; The date when this purchase will expire in simplified  extended ISO format (ISO 8601). This is typically 365 days from the time  of first use. This field will be &#x60;null&#x60; if the purchase has not yet been  used. | 
**purchased** | **int** | Number of procured lookups from this purchase. | 

## Example

```python
from openapi_client.models.api_key_current_purchase import ApiKeyCurrentPurchase

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyCurrentPurchase from a JSON string
api_key_current_purchase_instance = ApiKeyCurrentPurchase.from_json(json)
# print the JSON string representation of the object
print(ApiKeyCurrentPurchase.to_json())

# convert the object into a dict
api_key_current_purchase_dict = api_key_current_purchase_instance.to_dict()
# create an instance of ApiKeyCurrentPurchase from a dict
api_key_current_purchase_from_dict = ApiKeyCurrentPurchase.from_dict(api_key_current_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


