# TokenSuspendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **str** | Comment related to suspension. | [optional] 
**reason_code** | **str** | The reason for the action. Valid values:&lt;br /&gt;    \&quot;L\&quot; - Cardholder reported token device lost.&lt;br /&gt;    \&quot;S\&quot; - Cardholder reported token device stolen.&lt;br /&gt;    \&quot;T\&quot; - Issue or cardholder reported fraudulent token transactions.&lt;br /&gt;    \&quot;Z\&quot; - Other. | 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.token_suspend_request import TokenSuspendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenSuspendRequest from a JSON string
token_suspend_request_instance = TokenSuspendRequest.from_json(json)
# print the JSON string representation of the object
print(TokenSuspendRequest.to_json())

# convert the object into a dict
token_suspend_request_dict = token_suspend_request_instance.to_dict()
# create an instance of TokenSuspendRequest from a dict
token_suspend_request_from_dict = TokenSuspendRequest.from_dict(token_suspend_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


