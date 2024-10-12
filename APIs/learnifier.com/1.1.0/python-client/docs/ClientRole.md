# ClientRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the role | [optional] 
**name** | **str** | The name of the role | [optional] 

## Example

```python
from openapi_client.models.client_role import ClientRole

# TODO update the JSON string below
json = "{}"
# create an instance of ClientRole from a JSON string
client_role_instance = ClientRole.from_json(json)
# print the JSON string representation of the object
print(ClientRole.to_json())

# convert the object into a dict
client_role_dict = client_role_instance.to_dict()
# create an instance of ClientRole from a dict
client_role_from_dict = ClientRole.from_dict(client_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


