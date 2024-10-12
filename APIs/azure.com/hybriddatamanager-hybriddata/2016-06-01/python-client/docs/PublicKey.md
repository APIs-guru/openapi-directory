# PublicKey

Public key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PublicKeyProperties**](PublicKeyProperties.md) |  | 
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_key import PublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKey from a JSON string
public_key_instance = PublicKey.from_json(json)
# print the JSON string representation of the object
print(PublicKey.to_json())

# convert the object into a dict
public_key_dict = public_key_instance.to_dict()
# create an instance of PublicKey from a dict
public_key_from_dict = PublicKey.from_dict(public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


