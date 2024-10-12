# ApiKey

An API key used for authenticating with a configuration store endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | A connection string that can be used by supporting clients for authentication. | [optional] [readonly] 
**id** | **str** | The key ID. | [optional] [readonly] 
**last_modified** | **datetime** | The last time any of the key&#39;s properties were modified. | [optional] [readonly] 
**name** | **str** | A name for the key describing its usage. | [optional] [readonly] 
**read_only** | **bool** | Whether this key can only be used for read operations. | [optional] [readonly] 
**value** | **str** | The value of the key that is used for authentication purposes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_key import ApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKey from a JSON string
api_key_instance = ApiKey.from_json(json)
# print the JSON string representation of the object
print(ApiKey.to_json())

# convert the object into a dict
api_key_dict = api_key_instance.to_dict()
# create an instance of ApiKey from a dict
api_key_from_dict = ApiKey.from_dict(api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


