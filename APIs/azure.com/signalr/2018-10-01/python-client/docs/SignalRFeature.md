# SignalRFeature

Feature of a SignalR resource, which controls the SignalR runtime behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flag** | **str** | FeatureFlags is the supported features of Azure SignalR service.  - ServiceMode: Flag for backend server for SignalR service. Values allowed: \&quot;Default\&quot;: have your own backend server; \&quot;Serverless\&quot;: your application doesn&#39;t have a backend server; \&quot;Classic\&quot;: for backward compatibility. Support both Default and Serverless mode but not recommended; \&quot;PredefinedOnly\&quot;: for future use.  - EnableConnectivityLogs: \&quot;true\&quot;/\&quot;false\&quot;, to enable/disable the connectivity log category respectively. | 
**properties** | **Dict[str, str]** | Optional properties related to this feature. | [optional] 
**value** | **str** | Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values. | 

## Example

```python
from openapi_client.models.signal_r_feature import SignalRFeature

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRFeature from a JSON string
signal_r_feature_instance = SignalRFeature.from_json(json)
# print the JSON string representation of the object
print(SignalRFeature.to_json())

# convert the object into a dict
signal_r_feature_dict = signal_r_feature_instance.to_dict()
# create an instance of SignalRFeature from a dict
signal_r_feature_from_dict = SignalRFeature.from_dict(signal_r_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


