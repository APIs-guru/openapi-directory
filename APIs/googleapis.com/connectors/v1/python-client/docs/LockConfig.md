# LockConfig

Determines whether or no a connection is locked. If locked, a reason must be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** | Indicates whether or not the connection is locked. | [optional] 
**reason** | **str** | Describes why a connection is locked. | [optional] 

## Example

```python
from openapi_client.models.lock_config import LockConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LockConfig from a JSON string
lock_config_instance = LockConfig.from_json(json)
# print the JSON string representation of the object
print(LockConfig.to_json())

# convert the object into a dict
lock_config_dict = lock_config_instance.to_dict()
# create an instance of LockConfig from a dict
lock_config_from_dict = LockConfig.from_dict(lock_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


