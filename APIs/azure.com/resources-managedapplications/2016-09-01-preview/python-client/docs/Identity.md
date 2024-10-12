# Identity

Identity for the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal ID of resource identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant ID of resource. | [optional] [readonly] 
**type** | **str** | The identity type. | [optional] 

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


