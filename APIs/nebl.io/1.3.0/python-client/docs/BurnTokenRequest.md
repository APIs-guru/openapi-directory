# BurnTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**burn** | [**List[BurnTokenRequestBurnInner]**](BurnTokenRequestBurnInner.md) | Array of objects representing tokens to be burned | 
**fee** | **float** | Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL) | 
**var_from** | **List[str]** | Array of addresses to send the token from | [optional] 
**transfer** | [**List[BurnTokenRequestTransferInner]**](BurnTokenRequestTransferInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.burn_token_request import BurnTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BurnTokenRequest from a JSON string
burn_token_request_instance = BurnTokenRequest.from_json(json)
# print the JSON string representation of the object
print(BurnTokenRequest.to_json())

# convert the object into a dict
burn_token_request_dict = burn_token_request_instance.to_dict()
# create an instance of BurnTokenRequest from a dict
burn_token_request_from_dict = BurnTokenRequest.from_dict(burn_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


