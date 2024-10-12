# SendTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **float** | Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL) | 
**flags** | [**IssueTokenRequestFlags**](IssueTokenRequestFlags.md) |  | [optional] 
**var_from** | **List[str]** | Array of addresses to send the token from | [optional] 
**metadata** | [**IssueTokenRequestMetadata**](IssueTokenRequestMetadata.md) |  | [optional] 
**sendutxo** | **List[str]** | Array of UTXOs to send the token from | [optional] 
**to** | [**List[BurnTokenRequestTransferInner]**](BurnTokenRequestTransferInner.md) |  | 

## Example

```python
from openapi_client.models.send_token_request import SendTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendTokenRequest from a JSON string
send_token_request_instance = SendTokenRequest.from_json(json)
# print the JSON string representation of the object
print(SendTokenRequest.to_json())

# convert the object into a dict
send_token_request_dict = send_token_request_instance.to_dict()
# create an instance of SendTokenRequest from a dict
send_token_request_from_dict = SendTokenRequest.from_dict(send_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


