# ServerKeyProperties

Properties for a key execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The key creation date. | [optional] [readonly] 
**server_key_type** | **str** | The key type like  &#39;AzureKeyVault&#39;. | 
**uri** | **str** | The URI of the key. | [optional] 

## Example

```python
from openapi_client.models.server_key_properties import ServerKeyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerKeyProperties from a JSON string
server_key_properties_instance = ServerKeyProperties.from_json(json)
# print the JSON string representation of the object
print(ServerKeyProperties.to_json())

# convert the object into a dict
server_key_properties_dict = server_key_properties_instance.to_dict()
# create an instance of ServerKeyProperties from a dict
server_key_properties_from_dict = ServerKeyProperties.from_dict(server_key_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


