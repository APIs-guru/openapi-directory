# SasPortalTestPermissionsResponse

Response message for `TestPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | A set of permissions that the caller is allowed. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_test_permissions_response import SasPortalTestPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalTestPermissionsResponse from a JSON string
sas_portal_test_permissions_response_instance = SasPortalTestPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalTestPermissionsResponse.to_json())

# convert the object into a dict
sas_portal_test_permissions_response_dict = sas_portal_test_permissions_response_instance.to_dict()
# create an instance of SasPortalTestPermissionsResponse from a dict
sas_portal_test_permissions_response_from_dict = SasPortalTestPermissionsResponse.from_dict(sas_portal_test_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


