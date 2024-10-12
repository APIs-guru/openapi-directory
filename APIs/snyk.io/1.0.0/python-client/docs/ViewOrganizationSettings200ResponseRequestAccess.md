# ViewOrganizationSettings200ResponseRequestAccess

Will only be returned if `API_KEY` has read access to request access settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether requesting access to the organization is enabled. | 

## Example

```python
from openapi_client.models.view_organization_settings200_response_request_access import ViewOrganizationSettings200ResponseRequestAccess

# TODO update the JSON string below
json = "{}"
# create an instance of ViewOrganizationSettings200ResponseRequestAccess from a JSON string
view_organization_settings200_response_request_access_instance = ViewOrganizationSettings200ResponseRequestAccess.from_json(json)
# print the JSON string representation of the object
print(ViewOrganizationSettings200ResponseRequestAccess.to_json())

# convert the object into a dict
view_organization_settings200_response_request_access_dict = view_organization_settings200_response_request_access_instance.to_dict()
# create an instance of ViewOrganizationSettings200ResponseRequestAccess from a dict
view_organization_settings200_response_request_access_from_dict = ViewOrganizationSettings200ResponseRequestAccess.from_dict(view_organization_settings200_response_request_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


