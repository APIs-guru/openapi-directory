# OrganizationResponseInternal


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
**feature_flags** | **List[str]** | The feature flags that are enabled for this organization | [optional] 

## Example

```python
from openapi_client.models.organization_response_internal import OrganizationResponseInternal

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationResponseInternal from a JSON string
organization_response_internal_instance = OrganizationResponseInternal.from_json(json)
# print the JSON string representation of the object
print(OrganizationResponseInternal.to_json())

# convert the object into a dict
organization_response_internal_dict = organization_response_internal_instance.to_dict()
# create an instance of OrganizationResponseInternal from a dict
organization_response_internal_from_dict = OrganizationResponseInternal.from_dict(organization_response_internal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


