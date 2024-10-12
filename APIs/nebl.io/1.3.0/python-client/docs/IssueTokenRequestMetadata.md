# IssueTokenRequestMetadata

Object representing all metadata at token issuance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Long name or description of token (ex. Nibble) | [optional] 
**encryptions** | [**List[IssueTokenRequestMetadataEncryptionsInner]**](IssueTokenRequestMetadataEncryptionsInner.md) | Array of encryption instruction objects for encrypting userData | [optional] 
**issuer** | **str** | Name of token issuer | [optional] 
**rules** | [**IssueTokenRequestMetadataRules**](IssueTokenRequestMetadataRules.md) |  | [optional] 
**token_name** | **str** | Token Symbol it will be identified by (ex. NIBBL) | [optional] 
**urls** | [**List[IssueTokenRequestMetadataUrlsInner]**](IssueTokenRequestMetadataUrlsInner.md) |  | [optional] 
**user_data** | [**GetTokenMetadataResponseMetadataOfIssuanceDataUserData**](GetTokenMetadataResponseMetadataOfIssuanceDataUserData.md) |  | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata import IssueTokenRequestMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadata from a JSON string
issue_token_request_metadata_instance = IssueTokenRequestMetadata.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadata.to_json())

# convert the object into a dict
issue_token_request_metadata_dict = issue_token_request_metadata_instance.to_dict()
# create an instance of IssueTokenRequestMetadata from a dict
issue_token_request_metadata_from_dict = IssueTokenRequestMetadata.from_dict(issue_token_request_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


