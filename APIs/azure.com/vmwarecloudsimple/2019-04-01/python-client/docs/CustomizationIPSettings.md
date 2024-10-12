# CustomizationIPSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway** | **List[str]** | The list of gateways | [optional] 
**ip** | [**CustomizationIPAddress**](CustomizationIPAddress.md) |  | [optional] 
**subnet_mask** | **str** | Adapter subnet mask | [optional] 

## Example

```python
from openapi_client.models.customization_ip_settings import CustomizationIPSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationIPSettings from a JSON string
customization_ip_settings_instance = CustomizationIPSettings.from_json(json)
# print the JSON string representation of the object
print(CustomizationIPSettings.to_json())

# convert the object into a dict
customization_ip_settings_dict = customization_ip_settings_instance.to_dict()
# create an instance of CustomizationIPSettings from a dict
customization_ip_settings_from_dict = CustomizationIPSettings.from_dict(customization_ip_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


