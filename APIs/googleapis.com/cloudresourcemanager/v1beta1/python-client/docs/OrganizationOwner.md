# OrganizationOwner

The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_customer_id** | **str** | The G Suite customer id used in the Directory API. | [optional] 

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


