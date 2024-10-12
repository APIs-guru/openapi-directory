# GetOrganizations200ResponseInnerManagement

Information about the organization's management system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[GetOrganizations200ResponseInnerManagementDetailsInner]**](GetOrganizations200ResponseInnerManagementDetailsInner.md) | Details related to organization management, possibly empty | [optional] 

## Example

```python
from openapi_client.models.get_organizations200_response_inner_management import GetOrganizations200ResponseInnerManagement

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizations200ResponseInnerManagement from a JSON string
get_organizations200_response_inner_management_instance = GetOrganizations200ResponseInnerManagement.from_json(json)
# print the JSON string representation of the object
print(GetOrganizations200ResponseInnerManagement.to_json())

# convert the object into a dict
get_organizations200_response_inner_management_dict = get_organizations200_response_inner_management_instance.to_dict()
# create an instance of GetOrganizations200ResponseInnerManagement from a dict
get_organizations200_response_inner_management_from_dict = GetOrganizations200ResponseInnerManagement.from_dict(get_organizations200_response_inner_management_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


