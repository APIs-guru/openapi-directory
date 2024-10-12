# TokenUnsuspendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **str** | Comment related to unsuspension. | [optional] 
**reason_code** | **str** | The reason for the action. Valid values:&lt;br /&gt;    \&quot;F\&quot; - Cardholder reported token device found or not stolen&lt;br /&gt;    \&quot;T\&quot; - Issuer or cardholder confirmed no fraudulent token transactions&lt;br /&gt;    \&quot;Z\&quot; - Other. | 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.token_unsuspend_request import TokenUnsuspendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenUnsuspendRequest from a JSON string
token_unsuspend_request_instance = TokenUnsuspendRequest.from_json(json)
# print the JSON string representation of the object
print(TokenUnsuspendRequest.to_json())

# convert the object into a dict
token_unsuspend_request_dict = token_unsuspend_request_instance.to_dict()
# create an instance of TokenUnsuspendRequest from a dict
token_unsuspend_request_from_dict = TokenUnsuspendRequest.from_dict(token_unsuspend_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


