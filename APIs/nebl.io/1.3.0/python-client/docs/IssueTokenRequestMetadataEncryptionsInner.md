# IssueTokenRequestMetadataEncryptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | key format (pem or der) | [optional] 
**key** | **str** | userData key to encrypt | [optional] 
**pubkey** | **str** | RSA public key used for encryption | [optional] 
**type** | **str** | pkcs1 or pkcs8 | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_encryptions_inner import IssueTokenRequestMetadataEncryptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataEncryptionsInner from a JSON string
issue_token_request_metadata_encryptions_inner_instance = IssueTokenRequestMetadataEncryptionsInner.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataEncryptionsInner.to_json())

# convert the object into a dict
issue_token_request_metadata_encryptions_inner_dict = issue_token_request_metadata_encryptions_inner_instance.to_dict()
# create an instance of IssueTokenRequestMetadataEncryptionsInner from a dict
issue_token_request_metadata_encryptions_inner_from_dict = IssueTokenRequestMetadataEncryptionsInner.from_dict(issue_token_request_metadata_encryptions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


