# AppAccessRiskVerdict

Contains signals about others apps on the device which could be used to access or control the requesting app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**other_apps** | **str** | Required. App access risk verdict related to apps that are not installed by Google Play, and are not preloaded on the system image by the device manufacturer. | [optional] 
**play_or_system_apps** | **str** | Required. App access risk verdict related to apps that are not installed by the Google Play Store, and are not preloaded on the system image by the device manufacturer. | [optional] 

## Example

```python
from openapi_client.models.app_access_risk_verdict import AppAccessRiskVerdict

# TODO update the JSON string below
json = "{}"
# create an instance of AppAccessRiskVerdict from a JSON string
app_access_risk_verdict_instance = AppAccessRiskVerdict.from_json(json)
# print the JSON string representation of the object
print(AppAccessRiskVerdict.to_json())

# convert the object into a dict
app_access_risk_verdict_dict = app_access_risk_verdict_instance.to_dict()
# create an instance of AppAccessRiskVerdict from a dict
app_access_risk_verdict_from_dict = AppAccessRiskVerdict.from_dict(app_access_risk_verdict_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


