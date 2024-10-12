# CloseAccountOrganizationResponse


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
**collaborators_count** | **float** | The number of collaborators from the organization | 

## Example

```python
from openapi_client.models.close_account_organization_response import CloseAccountOrganizationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloseAccountOrganizationResponse from a JSON string
close_account_organization_response_instance = CloseAccountOrganizationResponse.from_json(json)
# print the JSON string representation of the object
print(CloseAccountOrganizationResponse.to_json())

# convert the object into a dict
close_account_organization_response_dict = close_account_organization_response_instance.to_dict()
# create an instance of CloseAccountOrganizationResponse from a dict
close_account_organization_response_from_dict = CloseAccountOrganizationResponse.from_dict(close_account_organization_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


