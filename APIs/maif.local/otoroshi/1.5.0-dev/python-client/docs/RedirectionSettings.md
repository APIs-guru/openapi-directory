# RedirectionSettings

The configuration for redirection per service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The http redirect code | 
**enabled** | **bool** | Whether or not redirection is enabled | 
**to** | **str** | The location for redirection | 

## Example

```python
from openapi_client.models.redirection_settings import RedirectionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RedirectionSettings from a JSON string
redirection_settings_instance = RedirectionSettings.from_json(json)
# print the JSON string representation of the object
print(RedirectionSettings.to_json())

# convert the object into a dict
redirection_settings_dict = redirection_settings_instance.to_dict()
# create an instance of RedirectionSettings from a dict
redirection_settings_from_dict = RedirectionSettings.from_dict(redirection_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


