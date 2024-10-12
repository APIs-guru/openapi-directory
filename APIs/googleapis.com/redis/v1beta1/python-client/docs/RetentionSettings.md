# RetentionSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity_based_retention** | **int** |  | [optional] 
**retention_unit** | **str** | The unit that &#39;retained_backups&#39; represents. | [optional] 
**time_based_retention** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.retention_settings import RetentionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionSettings from a JSON string
retention_settings_instance = RetentionSettings.from_json(json)
# print the JSON string representation of the object
print(RetentionSettings.to_json())

# convert the object into a dict
retention_settings_dict = retention_settings_instance.to_dict()
# create an instance of RetentionSettings from a dict
retention_settings_from_dict = RetentionSettings.from_dict(retention_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


