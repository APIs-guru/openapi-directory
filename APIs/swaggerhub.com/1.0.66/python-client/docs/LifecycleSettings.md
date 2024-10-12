# LifecycleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**published** | **bool** | Whether the definition is published (&#x60;true&#x60;) or unpublished (&#x60;false&#x60;) | [optional] 

## Example

```python
from openapi_client.models.lifecycle_settings import LifecycleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LifecycleSettings from a JSON string
lifecycle_settings_instance = LifecycleSettings.from_json(json)
# print the JSON string representation of the object
print(LifecycleSettings.to_json())

# convert the object into a dict
lifecycle_settings_dict = lifecycle_settings_instance.to_dict()
# create an instance of LifecycleSettings from a dict
lifecycle_settings_from_dict = LifecycleSettings.from_dict(lifecycle_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


