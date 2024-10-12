# AuthorizedNetwork

AuthorizedNetwork contains metadata for an authorized network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidr_range** | **str** | CIDR range for one authorzied network of the instance. | [optional] 

## Example

```python
from openapi_client.models.authorized_network import AuthorizedNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedNetwork from a JSON string
authorized_network_instance = AuthorizedNetwork.from_json(json)
# print the JSON string representation of the object
print(AuthorizedNetwork.to_json())

# convert the object into a dict
authorized_network_dict = authorized_network_instance.to_dict()
# create an instance of AuthorizedNetwork from a dict
authorized_network_from_dict = AuthorizedNetwork.from_dict(authorized_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


