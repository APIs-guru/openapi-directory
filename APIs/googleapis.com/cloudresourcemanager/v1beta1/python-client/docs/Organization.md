# Organization

The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Timestamp when the Organization was created. Assigned by the server. | [optional] 
**display_name** | **str** | A human-readable string that refers to the Organization in the Google Cloud console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, \&quot;google.com\&quot;) of the G Suite customer that owns the organization. | [optional] 
**lifecycle_state** | **str** | The organization&#39;s current lifecycle state. Assigned by the server. | [optional] 
**name** | **str** | Output only. The resource name of the organization. This is the organization&#39;s relative path in the API. Its format is \&quot;organizations/[organization_id]\&quot;. For example, \&quot;organizations/1234\&quot;. | [optional] 
**organization_id** | **str** | An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only. | [optional] 
**owner** | [**OrganizationOwner**](OrganizationOwner.md) |  | [optional] 

## Example

```python
from openapi_client.models.organization import Organization

# TODO update the JSON string below
json = "{}"
# create an instance of Organization from a JSON string
organization_instance = Organization.from_json(json)
# print the JSON string representation of the object
print(Organization.to_json())

# convert the object into a dict
organization_dict = organization_instance.to_dict()
# create an instance of Organization from a dict
organization_from_dict = Organization.from_dict(organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


