# IdentityDescription

Information describing the identities associated with this application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | the object identifier of the Service Principal of the identity associated with this resource. | [optional] 
**tenant_id** | **str** | the identifier of the tenant containing the application&#39;s identity. | [optional] 
**token_service_endpoint** | **str** | the endpoint for the token service managing this identity | [optional] 
**type** | **str** | the types of identities associated with this resource; currently restricted to &#39;SystemAssigned and UserAssigned&#39; | 
**user_assigned_identities** | [**Dict[str, IdentityItemDescription]**](IdentityItemDescription.md) | Defines a map that contains user assigned identities. | [optional] 

## Example

```python
from openapi_client.models.identity_description import IdentityDescription

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityDescription from a JSON string
identity_description_instance = IdentityDescription.from_json(json)
# print the JSON string representation of the object
print(IdentityDescription.to_json())

# convert the object into a dict
identity_description_dict = identity_description_instance.to_dict()
# create an instance of IdentityDescription from a dict
identity_description_from_dict = IdentityDescription.from_dict(identity_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


