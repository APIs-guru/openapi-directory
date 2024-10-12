# LinkedAppEnv


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**app_name** | **str** |  | 
**env** | [**List[WannabeEnv]**](WannabeEnv.md) |  | 

## Example

```python
from openapi_client.models.linked_app_env import LinkedAppEnv

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedAppEnv from a JSON string
linked_app_env_instance = LinkedAppEnv.from_json(json)
# print the JSON string representation of the object
print(LinkedAppEnv.to_json())

# convert the object into a dict
linked_app_env_dict = linked_app_env_instance.to_dict()
# create an instance of LinkedAppEnv from a dict
linked_app_env_from_dict = LinkedAppEnv.from_dict(linked_app_env_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


