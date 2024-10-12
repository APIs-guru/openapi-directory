# OrganizationOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** |  | [optional] [readonly] [default to False]
**id** | **str** | Internal ID of an organization owner | 

## Example

```python
from openapi_client.models.organization_owner import OrganizationOwner

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationOwner from a JSON string
organization_owner_instance = OrganizationOwner.from_json(json)
# print the JSON string representation of the object
print(OrganizationOwner.to_json())

# convert the object into a dict
organization_owner_dict = organization_owner_instance.to_dict()
# create an instance of OrganizationOwner from a dict
organization_owner_from_dict = OrganizationOwner.from_dict(organization_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


