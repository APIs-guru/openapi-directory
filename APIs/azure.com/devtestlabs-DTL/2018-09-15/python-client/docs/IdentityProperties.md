# IdentityProperties

Properties of a managed identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_secret_url** | **str** | The client secret URL of the identity. | [optional] 
**principal_id** | **str** | The principal id of resource identity. | [optional] 
**tenant_id** | **str** | The tenant identifier of resource. | [optional] 
**type** | **str** | Managed identity. | [optional] 

## Example

```python
from openapi_client.models.identity_properties import IdentityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProperties from a JSON string
identity_properties_instance = IdentityProperties.from_json(json)
# print the JSON string representation of the object
print(IdentityProperties.to_json())

# convert the object into a dict
identity_properties_dict = identity_properties_instance.to_dict()
# create an instance of IdentityProperties from a dict
identity_properties_from_dict = IdentityProperties.from_dict(identity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


