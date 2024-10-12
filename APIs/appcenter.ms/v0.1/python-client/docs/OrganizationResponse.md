# OrganizationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The URL to a user-uploaded Avatar image | [optional] 
**created_at** | **str** | The creation date of this organization | 
**display_name** | **str** | The display name of the organization | 
**id** | **str** | The internal unique id (UUID) of the organization. | 
**name** | **str** | The slug name of the organization | 
**origin** | **str** | The creation origin of this organization | 
**updated_at** | **str** | The date the organization was last updated at | 

## Example

```python
from openapi_client.models.organization_response import OrganizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationResponse from a JSON string
organization_response_instance = OrganizationResponse.from_json(json)
# print the JSON string representation of the object
print(OrganizationResponse.to_json())

# convert the object into a dict
organization_response_dict = organization_response_instance.to_dict()
# create an instance of OrganizationResponse from a dict
organization_response_from_dict = OrganizationResponse.from_dict(organization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


