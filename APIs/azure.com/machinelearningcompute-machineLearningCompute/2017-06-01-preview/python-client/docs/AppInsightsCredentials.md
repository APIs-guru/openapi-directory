# AppInsightsCredentials

AppInsights credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The AppInsights API key. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API. | [optional] 
**app_id** | **str** | The AppInsights application ID. | [optional] 

## Example

```python
from openapi_client.models.app_insights_credentials import AppInsightsCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of AppInsightsCredentials from a JSON string
app_insights_credentials_instance = AppInsightsCredentials.from_json(json)
# print the JSON string representation of the object
print(AppInsightsCredentials.to_json())

# convert the object into a dict
app_insights_credentials_dict = app_insights_credentials_instance.to_dict()
# create an instance of AppInsightsCredentials from a dict
app_insights_credentials_from_dict = AppInsightsCredentials.from_dict(app_insights_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


