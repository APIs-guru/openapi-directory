# TokenPurchase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | the payment token you retrieved from the Legato service. alphanumeric(36) | 
**complete** | **bool** | Set to FALSE for pre-auth | [optional] 
**name** | **str** | Card holder name. alphanumeric(64) | 

## Example

```python
from openapi_client.models.token_purchase import TokenPurchase

# TODO update the JSON string below
json = "{}"
# create an instance of TokenPurchase from a JSON string
token_purchase_instance = TokenPurchase.from_json(json)
# print the JSON string representation of the object
print(TokenPurchase.to_json())

# convert the object into a dict
token_purchase_dict = token_purchase_instance.to_dict()
# create an instance of TokenPurchase from a dict
token_purchase_from_dict = TokenPurchase.from_dict(token_purchase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


