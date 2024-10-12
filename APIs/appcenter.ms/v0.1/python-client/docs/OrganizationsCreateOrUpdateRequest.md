# OrganizationsCreateOrUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the organization | [optional] 
**name** | **str** | The name of the organization used in URLs | [optional] 

## Example

```python
from openapi_client.models.organizations_create_or_update_request import OrganizationsCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsCreateOrUpdateRequest from a JSON string
organizations_create_or_update_request_instance = OrganizationsCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationsCreateOrUpdateRequest.to_json())

# convert the object into a dict
organizations_create_or_update_request_dict = organizations_create_or_update_request_instance.to_dict()
# create an instance of OrganizationsCreateOrUpdateRequest from a dict
organizations_create_or_update_request_from_dict = OrganizationsCreateOrUpdateRequest.from_dict(organizations_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


