# SearchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_pan** | **str** | When present, the search will return tokens for the Account matching this Primary Account Number (PAN), for any Wallet Provider or device. Cannot be used together with any of the following search request.  parameters:TokenUniqueReference, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier. | [optional] 
**alternate_account_identifier** | **str** | When present, the search will return tokens matching this Alternate Account Identifier, for any Wallet Provider or device. Space characters are not allowed. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, Token, PaymentAppInstanceId, or CommentId. | [optional] 
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_id** | **str** | When present, the search will return one specific token linked to the comment. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, Token, PaymentAppInstanceId, or AlternateAccountIdentifier. | [optional] 
**exclude_deleted_indicator** | **str** | Indicates whether deleted tokens should be excluded from the search results. When omitted, deleted tokens are included in the results. \&quot;true\&quot; indicates deleted tokens are excluded from the search results. \&quot;false\&quot; means deleted tokens are included in the search results. | [optional] 
**payment_app_instance_id** | **str** | When present, the search will return tokens already present or to be provisioned to the specified Payment App instance.&lt;br&gt;&lt;br&gt;_Note:_ This may contain the identifier of the Secure Element or a mobile device for some programs. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, Token, CommentId, or AlternateAccountIdentifier. | [optional] 
**token** | **str** | When present, the search will return one specific token. Cannot be used together with any of the following search request parameters; AccountPan, TokenUniqueReference, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier. | [optional] 
**token_unique_reference** | **str** | When present, the search will return one specific matching token. Cannot be used together with any of the following search request parameters; AccountPan, Token, PaymentAppInstanceId, CommentId, or AlternateAccountIdentifier. | [optional] 

## Example

```python
from openapi_client.models.search_request import SearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRequest from a JSON string
search_request_instance = SearchRequest.from_json(json)
# print the JSON string representation of the object
print(SearchRequest.to_json())

# convert the object into a dict
search_request_dict = search_request_instance.to_dict()
# create an instance of SearchRequest from a dict
search_request_from_dict = SearchRequest.from_dict(search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


