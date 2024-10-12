# OrganizationsListAdministeredDefaultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**OrganizationsListAdministeredDefaultResponseError**](OrganizationsListAdministeredDefaultResponseError.md) |  | 

## Example

```python
from openapi_client.models.organizations_list_administered_default_response import OrganizationsListAdministeredDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsListAdministeredDefaultResponse from a JSON string
organizations_list_administered_default_response_instance = OrganizationsListAdministeredDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(OrganizationsListAdministeredDefaultResponse.to_json())

# convert the object into a dict
organizations_list_administered_default_response_dict = organizations_list_administered_default_response_instance.to_dict()
# create an instance of OrganizationsListAdministeredDefaultResponse from a dict
organizations_list_administered_default_response_from_dict = OrganizationsListAdministeredDefaultResponse.from_dict(organizations_list_administered_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


