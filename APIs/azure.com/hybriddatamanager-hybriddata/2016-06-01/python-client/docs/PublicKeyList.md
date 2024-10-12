# PublicKeyList

PublicKey Collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of public keys. | [optional] 
**value** | [**List[PublicKey]**](PublicKey.md) | List of public keys. | [optional] 

## Example

```python
from openapi_client.models.public_key_list import PublicKeyList

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKeyList from a JSON string
public_key_list_instance = PublicKeyList.from_json(json)
# print the JSON string representation of the object
print(PublicKeyList.to_json())

# convert the object into a dict
public_key_list_dict = public_key_list_instance.to_dict()
# create an instance of PublicKeyList from a dict
public_key_list_from_dict = PublicKeyList.from_dict(public_key_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


