# Permission

A single permission on the note. Associates a `member` with a `role`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** | Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note. | [optional] [readonly] 
**email** | **str** | The email associated with the member. If set on create, the &#x60;email&#x60; field in the &#x60;User&#x60; or &#x60;Group&#x60; message must either be empty or match this field. On read, may be unset if the member does not have an associated email. | [optional] 
**family** | **object** | Describes a single Google Family. | [optional] 
**group** | [**Group**](Group.md) |  | [optional] 
**name** | **str** | Output only. The resource name. | [optional] [readonly] 
**role** | **str** | The role granted by this permission. The role determines the entity’s ability to read, write, and share notes. | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.permission import Permission

# TODO update the JSON string below
json = "{}"
# create an instance of Permission from a JSON string
permission_instance = Permission.from_json(json)
# print the JSON string representation of the object
print(Permission.to_json())

# convert the object into a dict
permission_dict = permission_instance.to_dict()
# create an instance of Permission from a dict
permission_from_dict = Permission.from_dict(permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


