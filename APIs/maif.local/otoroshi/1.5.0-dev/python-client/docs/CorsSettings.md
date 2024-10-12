# CorsSettings

The configuration for cors support

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_credentials** | **bool** | Allow to pass credentials | 
**allow_headers** | **List[str]** | The cors allowed headers | 
**allow_methods** | **List[str]** | The cors allowed methods | 
**allow_origin** | **str** | The cors allowed origin | 
**enabled** | **bool** | Whether or not cors is enabled | 
**excluded_patterns** | **List[str]** | The cors excluded patterns | 
**expose_headers** | **List[str]** | The cors exposed header | 
**max_age** | **int** | Cors max age | 

## Example

```python
from openapi_client.models.cors_settings import CorsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CorsSettings from a JSON string
cors_settings_instance = CorsSettings.from_json(json)
# print the JSON string representation of the object
print(CorsSettings.to_json())

# convert the object into a dict
cors_settings_dict = cors_settings_instance.to_dict()
# create an instance of CorsSettings from a dict
cors_settings_from_dict = CorsSettings.from_dict(cors_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


