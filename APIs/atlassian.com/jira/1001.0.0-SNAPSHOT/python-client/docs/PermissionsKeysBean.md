# PermissionsKeysBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | A list of permission keys. | 

## Example

```python
from openapi_client.models.permissions_keys_bean import PermissionsKeysBean

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionsKeysBean from a JSON string
permissions_keys_bean_instance = PermissionsKeysBean.from_json(json)
# print the JSON string representation of the object
print(PermissionsKeysBean.to_json())

# convert the object into a dict
permissions_keys_bean_dict = permissions_keys_bean_instance.to_dict()
# create an instance of PermissionsKeysBean from a dict
permissions_keys_bean_from_dict = PermissionsKeysBean.from_dict(permissions_keys_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


