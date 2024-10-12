# AuthKeys


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The primary key. | [optional] 
**secondary_key** | **str** | The secondary key. | [optional] 

## Example

```python
from openapi_client.models.auth_keys import AuthKeys

# TODO update the JSON string below
json = "{}"
# create an instance of AuthKeys from a JSON string
auth_keys_instance = AuthKeys.from_json(json)
# print the JSON string representation of the object
print(AuthKeys.to_json())

# convert the object into a dict
auth_keys_dict = auth_keys_instance.to_dict()
# create an instance of AuthKeys from a dict
auth_keys_from_dict = AuthKeys.from_dict(auth_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


