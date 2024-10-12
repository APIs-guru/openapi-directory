# TokenCommentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | [optional] 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.token_comments_request import TokenCommentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCommentsRequest from a JSON string
token_comments_request_instance = TokenCommentsRequest.from_json(json)
# print the JSON string representation of the object
print(TokenCommentsRequest.to_json())

# convert the object into a dict
token_comments_request_dict = token_comments_request_instance.to_dict()
# create an instance of TokenCommentsRequest from a dict
token_comments_request_from_dict = TokenCommentsRequest.from_dict(token_comments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


