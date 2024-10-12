# SecretFragment

A secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecretPropertiesFragment**](SecretPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.secret_fragment import SecretFragment

# TODO update the JSON string below
json = "{}"
# create an instance of SecretFragment from a JSON string
secret_fragment_instance = SecretFragment.from_json(json)
# print the JSON string representation of the object
print(SecretFragment.to_json())

# convert the object into a dict
secret_fragment_dict = secret_fragment_instance.to_dict()
# create an instance of SecretFragment from a dict
secret_fragment_from_dict = SecretFragment.from_dict(secret_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


