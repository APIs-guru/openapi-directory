# AccessPolicyResource

An access policy is used to grant users and applications access to the environment. Roles are assigned to service principals in Azure Active Directory. These roles define the actions the principal can perform through the Time Series Insights data plane APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AccessPolicyResourceProperties**](AccessPolicyResourceProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.access_policy_resource import AccessPolicyResource

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyResource from a JSON string
access_policy_resource_instance = AccessPolicyResource.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyResource.to_json())

# convert the object into a dict
access_policy_resource_dict = access_policy_resource_instance.to_dict()
# create an instance of AccessPolicyResource from a dict
access_policy_resource_from_dict = AccessPolicyResource.from_dict(access_policy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


