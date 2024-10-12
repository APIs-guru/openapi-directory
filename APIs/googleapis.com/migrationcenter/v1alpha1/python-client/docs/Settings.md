# Settings

Describes the Migration Center settings related to the project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_cloud_logging** | **bool** | Disable Cloud Logging for the Migration Center API. Users are billed for the logs. | [optional] 
**name** | **str** | Output only. The name of the resource. | [optional] [readonly] 
**preference_set** | **str** | The preference set used by default for a project. | [optional] 

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


