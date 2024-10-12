# LinkAADtoUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_tenant_ids** | **List[str]** | An array of AAD tenant data needed to link the user to the tenants | 
**role** | **str** | The role of the user to be added | [optional] 

## Example

```python
from openapi_client.models.link_aa_dto_user_request import LinkAADtoUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LinkAADtoUserRequest from a JSON string
link_aa_dto_user_request_instance = LinkAADtoUserRequest.from_json(json)
# print the JSON string representation of the object
print(LinkAADtoUserRequest.to_json())

# convert the object into a dict
link_aa_dto_user_request_dict = link_aa_dto_user_request_instance.to_dict()
# create an instance of LinkAADtoUserRequest from a dict
link_aa_dto_user_request_from_dict = LinkAADtoUserRequest.from_dict(link_aa_dto_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


