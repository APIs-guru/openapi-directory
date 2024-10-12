# AdministeredOrgsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**OrganizationsListAdministered200ResponseOrganizations**](OrganizationsListAdministered200ResponseOrganizations.md) |  | 

## Example

```python
from openapi_client.models.administered_orgs_response import AdministeredOrgsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdministeredOrgsResponse from a JSON string
administered_orgs_response_instance = AdministeredOrgsResponse.from_json(json)
# print the JSON string representation of the object
print(AdministeredOrgsResponse.to_json())

# convert the object into a dict
administered_orgs_response_dict = administered_orgs_response_instance.to_dict()
# create an instance of AdministeredOrgsResponse from a dict
administered_orgs_response_from_dict = AdministeredOrgsResponse.from_dict(administered_orgs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


