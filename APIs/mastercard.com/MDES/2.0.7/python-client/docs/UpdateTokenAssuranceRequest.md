# UpdateTokenAssuranceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**comment_text** | **str** | Comment related to the update. | [optional] 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.update_token_assurance_request import UpdateTokenAssuranceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTokenAssuranceRequest from a JSON string
update_token_assurance_request_instance = UpdateTokenAssuranceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTokenAssuranceRequest.to_json())

# convert the object into a dict
update_token_assurance_request_dict = update_token_assurance_request_instance.to_dict()
# create an instance of UpdateTokenAssuranceRequest from a dict
update_token_assurance_request_from_dict = UpdateTokenAssuranceRequest.from_dict(update_token_assurance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


