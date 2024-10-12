# AccessPolicyResourceProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | An description of the access policy. | [optional] 
**principal_object_id** | **str** | The objectId of the principal in Azure Active Directory. | [optional] 
**roles** | **List[str]** | The list of roles the principal is assigned on the environment. | [optional] 

## Example

```python
from openapi_client.models.access_policy_resource_properties import AccessPolicyResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyResourceProperties from a JSON string
access_policy_resource_properties_instance = AccessPolicyResourceProperties.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyResourceProperties.to_json())

# convert the object into a dict
access_policy_resource_properties_dict = access_policy_resource_properties_instance.to_dict()
# create an instance of AccessPolicyResourceProperties from a dict
access_policy_resource_properties_from_dict = AccessPolicyResourceProperties.from_dict(access_policy_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


