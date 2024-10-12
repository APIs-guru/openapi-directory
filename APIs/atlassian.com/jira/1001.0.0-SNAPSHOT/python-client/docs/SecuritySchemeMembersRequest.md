# SecuritySchemeMembersRequest

Details of issue security scheme level new members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[SecuritySchemeLevelMemberBean]**](SecuritySchemeLevelMemberBean.md) | The list of level members which should be added to the issue security scheme level. | [optional] 

## Example

```python
from openapi_client.models.security_scheme_members_request import SecuritySchemeMembersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemeMembersRequest from a JSON string
security_scheme_members_request_instance = SecuritySchemeMembersRequest.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemeMembersRequest.to_json())

# convert the object into a dict
security_scheme_members_request_dict = security_scheme_members_request_instance.to_dict()
# create an instance of SecuritySchemeMembersRequest from a dict
security_scheme_members_request_from_dict = SecuritySchemeMembersRequest.from_dict(security_scheme_members_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


