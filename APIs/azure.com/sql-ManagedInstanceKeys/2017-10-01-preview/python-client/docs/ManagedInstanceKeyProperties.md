# ManagedInstanceKeyProperties

Properties for a key execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The key creation date. | [optional] [readonly] 
**server_key_type** | **str** | The key type like &#39;ServiceManaged&#39;, &#39;AzureKeyVault&#39;. | 
**thumbprint** | **str** | Thumbprint of the key. | [optional] [readonly] 
**uri** | **str** | The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required. | [optional] 

## Example

```python
from openapi_client.models.managed_instance_key_properties import ManagedInstanceKeyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceKeyProperties from a JSON string
managed_instance_key_properties_instance = ManagedInstanceKeyProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceKeyProperties.to_json())

# convert the object into a dict
managed_instance_key_properties_dict = managed_instance_key_properties_instance.to_dict()
# create an instance of ManagedInstanceKeyProperties from a dict
managed_instance_key_properties_from_dict = ManagedInstanceKeyProperties.from_dict(managed_instance_key_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


