# Identity

Describes an identity resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the created identity. | [optional] [readonly] 
**location** | **str** | The Azure region where the identity lives. | [optional] 
**name** | **str** | The name of the created identity. | [optional] [readonly] 
**properties** | [**IdentityProperties**](IdentityProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | The type of resource i.e. Microsoft.ManagedIdentity/userAssignedIdentities | [optional] [readonly] 

## Example

```python
from openapi_client.models.identity import Identity

# TODO update the JSON string below
json = "{}"
# create an instance of Identity from a JSON string
identity_instance = Identity.from_json(json)
# print the JSON string representation of the object
print(Identity.to_json())

# convert the object into a dict
identity_dict = identity_instance.to_dict()
# create an instance of Identity from a dict
identity_from_dict = Identity.from_dict(identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


