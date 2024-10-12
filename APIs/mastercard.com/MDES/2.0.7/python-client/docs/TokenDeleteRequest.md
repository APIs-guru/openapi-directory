# TokenDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **str** | Comment related to deletion. | [optional] 
**reason_code** | **str** | The reason for the action. Valid values:&lt;br /&gt;    \&quot;L\&quot; - Cardholder confirmed token device lost&lt;br /&gt;    \&quot;S\&quot; - Cardholder confirmed token device stolen&lt;br /&gt;    \&quot;F\&quot; - Issuer or cardholder confirmed fraudulent token transactions (Deprecated)&lt;br /&gt;    \&quot;T\&quot; - Issuer or cardholder confirmed fraudulent token transactions&lt;br /&gt;    \&quot;C\&quot; - Account closed&lt;br /&gt;    \&quot;Z\&quot; - Other | 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.token_delete_request import TokenDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenDeleteRequest from a JSON string
token_delete_request_instance = TokenDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(TokenDeleteRequest.to_json())

# convert the object into a dict
token_delete_request_dict = token_delete_request_instance.to_dict()
# create an instance of TokenDeleteRequest from a dict
token_delete_request_from_dict = TokenDeleteRequest.from_dict(token_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


