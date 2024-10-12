# ClientRoles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An organization unit id | [optional] 
**roles** | [**List[ClientRole]**](ClientRole.md) | A list with client roles | [optional] 

## Example

```python
from openapi_client.models.client_roles import ClientRoles

# TODO update the JSON string below
json = "{}"
# create an instance of ClientRoles from a JSON string
client_roles_instance = ClientRoles.from_json(json)
# print the JSON string representation of the object
print(ClientRoles.to_json())

# convert the object into a dict
client_roles_dict = client_roles_instance.to_dict()
# create an instance of ClientRoles from a dict
client_roles_from_dict = ClientRoles.from_dict(client_roles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


