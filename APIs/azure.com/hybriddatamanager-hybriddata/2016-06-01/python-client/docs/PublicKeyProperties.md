# PublicKeyProperties

PublicKey Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_service_level1_key** | [**Key**](Key.md) |  | 
**data_service_level2_key** | [**Key**](Key.md) |  | 

## Example

```python
from openapi_client.models.public_key_properties import PublicKeyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKeyProperties from a JSON string
public_key_properties_instance = PublicKeyProperties.from_json(json)
# print the JSON string representation of the object
print(PublicKeyProperties.to_json())

# convert the object into a dict
public_key_properties_dict = public_key_properties_instance.to_dict()
# create an instance of PublicKeyProperties from a dict
public_key_properties_from_dict = PublicKeyProperties.from_dict(public_key_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


