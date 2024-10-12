# WorkforceIdentityBasedManagementURI

ManagementURI depending on the Workforce Identity i.e. either 1p or 3p.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_party_management_uri** | **str** | Output only. First party Management URI for Google Identities. | [optional] [readonly] 
**third_party_management_uri** | **str** | Output only. Third party Management URI for External Identity Providers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workforce_identity_based_management_uri import WorkforceIdentityBasedManagementURI

# TODO update the JSON string below
json = "{}"
# create an instance of WorkforceIdentityBasedManagementURI from a JSON string
workforce_identity_based_management_uri_instance = WorkforceIdentityBasedManagementURI.from_json(json)
# print the JSON string representation of the object
print(WorkforceIdentityBasedManagementURI.to_json())

# convert the object into a dict
workforce_identity_based_management_uri_dict = workforce_identity_based_management_uri_instance.to_dict()
# create an instance of WorkforceIdentityBasedManagementURI from a dict
workforce_identity_based_management_uri_from_dict = WorkforceIdentityBasedManagementURI.from_dict(workforce_identity_based_management_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


