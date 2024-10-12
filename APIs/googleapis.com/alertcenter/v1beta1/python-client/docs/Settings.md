# Settings

Customer-level settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifications** | [**List[Notification]**](Notification.md) | The list of notifications. | [optional] 

## Example

```python
from openapi_client.models.settings import Settings

# TODO update the JSON string below
json = "{}"
# create an instance of Settings from a JSON string
settings_instance = Settings.from_json(json)
# print the JSON string representation of the object
print(Settings.to_json())

# convert the object into a dict
settings_dict = settings_instance.to_dict()
# create an instance of Settings from a dict
settings_from_dict = Settings.from_dict(settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


