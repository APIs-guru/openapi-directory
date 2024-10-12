# AuthenticationKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Available only to Smart Tap enabled partners. Contact support for additional guidance. | [optional] 
**public_key_pem** | **str** | Available only to Smart Tap enabled partners. Contact support for additional guidance. | [optional] 

## Example

```python
from openapi_client.models.authentication_key import AuthenticationKey

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationKey from a JSON string
authentication_key_instance = AuthenticationKey.from_json(json)
# print the JSON string representation of the object
print(AuthenticationKey.to_json())

# convert the object into a dict
authentication_key_dict = authentication_key_instance.to_dict()
# create an instance of AuthenticationKey from a dict
authentication_key_from_dict = AuthenticationKey.from_dict(authentication_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


