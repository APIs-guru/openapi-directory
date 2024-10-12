# BusinessCallsSettings

Business calls settings for a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls_state** | **str** | Required. The state of this location&#39;s enrollment in Business calls. | [optional] 
**consent_time** | **str** | Input only. Time when the end user provided consent to the API user to enable business calls. | [optional] 
**name** | **str** | Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings | [optional] 

## Example

```python
from openapi_client.models.business_calls_settings import BusinessCallsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCallsSettings from a JSON string
business_calls_settings_instance = BusinessCallsSettings.from_json(json)
# print the JSON string representation of the object
print(BusinessCallsSettings.to_json())

# convert the object into a dict
business_calls_settings_dict = business_calls_settings_instance.to_dict()
# create an instance of BusinessCallsSettings from a dict
business_calls_settings_from_dict = BusinessCallsSettings.from_dict(business_calls_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


