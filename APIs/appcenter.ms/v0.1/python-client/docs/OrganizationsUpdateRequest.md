# OrganizationsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full (friendly) name of the organization. | [optional] 
**name** | **str** | The name of the organization used in URLs | [optional] 

## Example

```python
from openapi_client.models.organizations_update_request import OrganizationsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsUpdateRequest from a JSON string
organizations_update_request_instance = OrganizationsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationsUpdateRequest.to_json())

# convert the object into a dict
organizations_update_request_dict = organizations_update_request_instance.to_dict()
# create an instance of OrganizationsUpdateRequest from a dict
organizations_update_request_from_dict = OrganizationsUpdateRequest.from_dict(organizations_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


