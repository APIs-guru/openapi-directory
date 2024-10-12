# VisibilitySettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private** | **bool** | Whether the definition version is private (&#x60;true&#x60;) or public (&#x60;false&#x60;) | 

## Example

```python
from openapi_client.models.visibility_settings import VisibilitySettings

# TODO update the JSON string below
json = "{}"
# create an instance of VisibilitySettings from a JSON string
visibility_settings_instance = VisibilitySettings.from_json(json)
# print the JSON string representation of the object
print(VisibilitySettings.to_json())

# convert the object into a dict
visibility_settings_dict = visibility_settings_instance.to_dict()
# create an instance of VisibilitySettings from a dict
visibility_settings_from_dict = VisibilitySettings.from_dict(visibility_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


