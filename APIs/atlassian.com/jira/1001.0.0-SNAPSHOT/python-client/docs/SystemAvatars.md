# SystemAvatars

List of system avatars.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system** | [**List[Avatar]**](Avatar.md) | A list of avatar details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.system_avatars import SystemAvatars

# TODO update the JSON string below
json = "{}"
# create an instance of SystemAvatars from a JSON string
system_avatars_instance = SystemAvatars.from_json(json)
# print the JSON string representation of the object
print(SystemAvatars.to_json())

# convert the object into a dict
system_avatars_dict = system_avatars_instance.to_dict()
# create an instance of SystemAvatars from a dict
system_avatars_from_dict = SystemAvatars.from_dict(system_avatars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


