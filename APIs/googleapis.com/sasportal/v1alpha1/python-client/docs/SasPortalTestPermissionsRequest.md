# SasPortalTestPermissionsRequest

Request message for `TestPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The set of permissions to check for the &#x60;resource&#x60;. | [optional] 
**resource** | **str** | Required. The resource for which the permissions are being requested. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_test_permissions_request import SasPortalTestPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalTestPermissionsRequest from a JSON string
sas_portal_test_permissions_request_instance = SasPortalTestPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalTestPermissionsRequest.to_json())

# convert the object into a dict
sas_portal_test_permissions_request_dict = sas_portal_test_permissions_request_instance.to_dict()
# create an instance of SasPortalTestPermissionsRequest from a dict
sas_portal_test_permissions_request_from_dict = SasPortalTestPermissionsRequest.from_dict(sas_portal_test_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


