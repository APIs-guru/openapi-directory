# OncWifiContext

Additional context for non-compliance related to Wi-Fi configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wifi_guid** | **str** | The GUID of non-compliant Wi-Fi configuration. | [optional] 

## Example

```python
from openapi_client.models.onc_wifi_context import OncWifiContext

# TODO update the JSON string below
json = "{}"
# create an instance of OncWifiContext from a JSON string
onc_wifi_context_instance = OncWifiContext.from_json(json)
# print the JSON string representation of the object
print(OncWifiContext.to_json())

# convert the object into a dict
onc_wifi_context_dict = onc_wifi_context_instance.to_dict()
# create an instance of OncWifiContext from a dict
onc_wifi_context_from_dict = OncWifiContext.from_dict(onc_wifi_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


