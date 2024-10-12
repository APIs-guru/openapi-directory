# Settings

Global Settings details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings} | [optional] [readonly] 
**payg** | **bool** | Output only. Flag indicates if user is in PayG model | [optional] [readonly] 
**tenant_project_id** | **str** | Output only. Tenant project id of the consumer project. | [optional] [readonly] 
**vpcsc** | **bool** | Optional. Flag indicates whether vpc-sc is enabled. | [optional] 

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


