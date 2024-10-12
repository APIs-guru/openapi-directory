# OrganizationResponseManagement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The URL to a user-uploaded Avatar image | [optional] 
**created_at** | **str** | The date when the organization was created | 
**display_name** | **str** | The display name of the organization | 
**id** | **str** | The internal unique id (UUID) of the organization. | 
**name** | **str** | The slug name of the organization | 
**origin** | **str** | The creation origin of this organization | 
**updated_at** | **str** | The date when the organization was updated | 
**feature_flags** | **List[str]** | The feature flags that are enabled for this organization | [optional] 
**email** | **str** | The organization email, if the app was synced from HockeyApp | [optional] 

## Example

```python
from openapi_client.models.organization_response_management import OrganizationResponseManagement

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationResponseManagement from a JSON string
organization_response_management_instance = OrganizationResponseManagement.from_json(json)
# print the JSON string representation of the object
print(OrganizationResponseManagement.to_json())

# convert the object into a dict
organization_response_management_dict = organization_response_management_instance.to_dict()
# create an instance of OrganizationResponseManagement from a dict
organization_response_management_from_dict = OrganizationResponseManagement.from_dict(organization_response_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


