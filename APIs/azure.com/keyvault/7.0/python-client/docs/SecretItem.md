# SecretItem

The secret item containing secret metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | Type of the secret value such as a password. | [optional] 
**id** | **str** | Secret identifier. | [optional] 
**managed** | **bool** | True if the secret&#39;s lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.secret_item import SecretItem

# TODO update the JSON string below
json = "{}"
# create an instance of SecretItem from a JSON string
secret_item_instance = SecretItem.from_json(json)
# print the JSON string representation of the object
print(SecretItem.to_json())

# convert the object into a dict
secret_item_dict = secret_item_instance.to_dict()
# create an instance of SecretItem from a dict
secret_item_from_dict = SecretItem.from_dict(secret_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


