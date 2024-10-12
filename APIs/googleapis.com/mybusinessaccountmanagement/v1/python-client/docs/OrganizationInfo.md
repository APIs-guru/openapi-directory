# OrganizationInfo

Additional information stored for an organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**PostalAddress**](PostalAddress.md) |  | [optional] 
**phone_number** | **str** | Output only. The contact number for the organization. | [optional] [readonly] 
**registered_domain** | **str** | Output only. The registered domain for the account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.organization_info import OrganizationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationInfo from a JSON string
organization_info_instance = OrganizationInfo.from_json(json)
# print the JSON string representation of the object
print(OrganizationInfo.to_json())

# convert the object into a dict
organization_info_dict = organization_info_instance.to_dict()
# create an instance of OrganizationInfo from a dict
organization_info_from_dict = OrganizationInfo.from_dict(organization_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


