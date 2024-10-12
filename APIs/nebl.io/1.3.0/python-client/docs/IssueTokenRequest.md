# IssueTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Number of tokens to issue | 
**divisibility** | **float** | Number of decimal places the token should be divisble by (0-7) | 
**fee** | **float** | Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL) | 
**flags** | [**IssueTokenRequestFlags**](IssueTokenRequestFlags.md) |  | [optional] 
**issue_address** | **str** | Address issuing the token | 
**metadata** | [**IssueTokenRequestMetadata**](IssueTokenRequestMetadata.md) |  | [optional] 
**reissuable** | **bool** | whether the token should be reissuable | 
**transfer** | [**List[IssueTokenRequestTransferInner]**](IssueTokenRequestTransferInner.md) |  | 

## Example

```python
from openapi_client.models.issue_token_request import IssueTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequest from a JSON string
issue_token_request_instance = IssueTokenRequest.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequest.to_json())

# convert the object into a dict
issue_token_request_dict = issue_token_request_instance.to_dict()
# create an instance of IssueTokenRequest from a dict
issue_token_request_from_dict = IssueTokenRequest.from_dict(issue_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


