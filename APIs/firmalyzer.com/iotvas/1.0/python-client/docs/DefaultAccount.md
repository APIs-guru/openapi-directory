# DefaultAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **int** |  | [optional] 
**hash_algorithm** | **str** |  | [optional] 
**home_dir** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**pwd_hash** | **str** |  | [optional] 
**shell** | **str** |  | [optional] 
**uid** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.default_account import DefaultAccount

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultAccount from a JSON string
default_account_instance = DefaultAccount.from_json(json)
# print the JSON string representation of the object
print(DefaultAccount.to_json())

# convert the object into a dict
default_account_dict = default_account_instance.to_dict()
# create an instance of DefaultAccount from a dict
default_account_from_dict = DefaultAccount.from_dict(default_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


