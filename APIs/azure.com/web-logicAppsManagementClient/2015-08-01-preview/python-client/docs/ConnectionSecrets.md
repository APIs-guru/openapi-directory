# ConnectionSecrets



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_key** | **str** | Connection Key | [optional] 
**parameter_values** | **Dict[str, object]** | Tokens/Claim | [optional] 

## Example

```python
from openapi_client.models.connection_secrets import ConnectionSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSecrets from a JSON string
connection_secrets_instance = ConnectionSecrets.from_json(json)
# print the JSON string representation of the object
print(ConnectionSecrets.to_json())

# convert the object into a dict
connection_secrets_dict = connection_secrets_instance.to_dict()
# create an instance of ConnectionSecrets from a dict
connection_secrets_from_dict = ConnectionSecrets.from_dict(connection_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


