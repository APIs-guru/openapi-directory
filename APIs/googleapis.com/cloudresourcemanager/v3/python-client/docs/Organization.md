# Organization

The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the Organization was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. Timestamp when the Organization was requested for deletion. | [optional] [readonly] 
**directory_customer_id** | **str** | Immutable. The G Suite / Workspace customer id used in the Directory API. | [optional] 
**display_name** | **str** | Output only. A human-readable string that refers to the organization in the Google Cloud Console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, \&quot;google.com\&quot;) of the Google Workspace customer that owns the organization. | [optional] [readonly] 
**etag** | **str** | Output only. A checksum computed by the server based on the current value of the Organization resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the organization. This is the organization&#39;s relative path in the API. Its format is \&quot;organizations/[organization_id]\&quot;. For example, \&quot;organizations/1234\&quot;. | [optional] [readonly] 
**state** | **str** | Output only. The organization&#39;s current lifecycle state. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when the Organization was last modified. | [optional] [readonly] 

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


