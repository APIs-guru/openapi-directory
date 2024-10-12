# CustomApp

This resource represents a custom app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Default listing language in BCP 47 format. | [optional] 
**organizations** | [**List[Organization]**](Organization.md) | Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account. | [optional] 
**package_name** | **str** | Output only. Package name of the created Android app. Only present in the API response. | [optional] [readonly] 
**title** | **str** | Title for the Android app. | [optional] 

## Example

```python
from openapi_client.models.custom_app import CustomApp

# TODO update the JSON string below
json = "{}"
# create an instance of CustomApp from a JSON string
custom_app_instance = CustomApp.from_json(json)
# print the JSON string representation of the object
print(CustomApp.to_json())

# convert the object into a dict
custom_app_dict = custom_app_instance.to_dict()
# create an instance of CustomApp from a dict
custom_app_from_dict = CustomApp.from_dict(custom_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


