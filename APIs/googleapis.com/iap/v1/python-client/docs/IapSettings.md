# IapSettings

The IAP configurable settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_settings** | [**AccessSettings**](AccessSettings.md) |  | [optional] 
**application_settings** | [**ApplicationSettings**](ApplicationSettings.md) |  | [optional] 
**name** | **str** | Required. The resource name of the IAP protected resource. | [optional] 

## Example

```python
from openapi_client.models.iap_settings import IapSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IapSettings from a JSON string
iap_settings_instance = IapSettings.from_json(json)
# print the JSON string representation of the object
print(IapSettings.to_json())

# convert the object into a dict
iap_settings_dict = iap_settings_instance.to_dict()
# create an instance of IapSettings from a dict
iap_settings_from_dict = IapSettings.from_dict(iap_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


