# ErrorRetentionSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_in_days** | **int** |  | 

## Example

```python
from openapi_client.models.error_retention_settings import ErrorRetentionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorRetentionSettings from a JSON string
error_retention_settings_instance = ErrorRetentionSettings.from_json(json)
# print the JSON string representation of the object
print(ErrorRetentionSettings.to_json())

# convert the object into a dict
error_retention_settings_dict = error_retention_settings_instance.to_dict()
# create an instance of ErrorRetentionSettings from a dict
error_retention_settings_from_dict = ErrorRetentionSettings.from_dict(error_retention_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


