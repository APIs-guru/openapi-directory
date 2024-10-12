# ViewOrganizationSettings200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_access** | [**ViewOrganizationSettings200ResponseRequestAccess**](ViewOrganizationSettings200ResponseRequestAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.view_organization_settings200_response import ViewOrganizationSettings200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ViewOrganizationSettings200Response from a JSON string
view_organization_settings200_response_instance = ViewOrganizationSettings200Response.from_json(json)
# print the JSON string representation of the object
print(ViewOrganizationSettings200Response.to_json())

# convert the object into a dict
view_organization_settings200_response_dict = view_organization_settings200_response_instance.to_dict()
# create an instance of ViewOrganizationSettings200Response from a dict
view_organization_settings200_response_from_dict = ViewOrganizationSettings200Response.from_dict(view_organization_settings200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


