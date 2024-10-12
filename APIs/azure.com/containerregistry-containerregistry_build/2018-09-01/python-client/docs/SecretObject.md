# SecretObject

Describes the properties of a secret object value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the secret object which determines how the value of the secret object has to be  interpreted. | [optional] 
**value** | **str** | The value of the secret. The format of this value will be determined  based on the type of the secret object. If the type is Opaque, the value will be  used as is without any modification. | [optional] 

## Example

```python
from openapi_client.models.secret_object import SecretObject

# TODO update the JSON string below
json = "{}"
# create an instance of SecretObject from a JSON string
secret_object_instance = SecretObject.from_json(json)
# print the JSON string representation of the object
print(SecretObject.to_json())

# convert the object into a dict
secret_object_dict = secret_object_instance.to_dict()
# create an instance of SecretObject from a dict
secret_object_from_dict = SecretObject.from_dict(secret_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


