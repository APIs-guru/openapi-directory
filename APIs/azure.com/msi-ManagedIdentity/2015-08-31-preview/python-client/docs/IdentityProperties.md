# IdentityProperties

The properties associated with the identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The id of the app associated with the identity. This is a random generated UUID by MSI. | [optional] [readonly] 
**client_secret_url** | **str** |  The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials. | [optional] [readonly] 
**principal_id** | **str** | The id of the service principal object associated with the created identity. | [optional] [readonly] 
**tenant_id** | **str** | The id of the tenant which the identity belongs to. | [optional] [readonly] 

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


