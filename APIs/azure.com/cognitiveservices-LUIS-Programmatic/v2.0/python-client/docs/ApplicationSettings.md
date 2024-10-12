# ApplicationSettings

The application settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The application ID. | 
**public** | **bool** | Setting your application as public allows other people to use your application&#39;s endpoint using their own keys. | 

## Example

```python
from openapi_client.models.application_settings import ApplicationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSettings from a JSON string
application_settings_instance = ApplicationSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationSettings.to_json())

# convert the object into a dict
application_settings_dict = application_settings_instance.to_dict()
# create an instance of ApplicationSettings from a dict
application_settings_from_dict = ApplicationSettings.from_dict(application_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


