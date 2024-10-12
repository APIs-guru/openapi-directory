# BurnTokenRequestTransferInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address to transfer tokens to | [optional] 
**amount** | **float** | Number of tokens to send | [optional] 
**token_id** | **str** | ID of token we are sending | [optional] 

## Example

```python
from openapi_client.models.burn_token_request_transfer_inner import BurnTokenRequestTransferInner

# TODO update the JSON string below
json = "{}"
# create an instance of BurnTokenRequestTransferInner from a JSON string
burn_token_request_transfer_inner_instance = BurnTokenRequestTransferInner.from_json(json)
# print the JSON string representation of the object
print(BurnTokenRequestTransferInner.to_json())

# convert the object into a dict
burn_token_request_transfer_inner_dict = burn_token_request_transfer_inner_instance.to_dict()
# create an instance of BurnTokenRequestTransferInner from a dict
burn_token_request_transfer_inner_from_dict = BurnTokenRequestTransferInner.from_dict(burn_token_request_transfer_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


