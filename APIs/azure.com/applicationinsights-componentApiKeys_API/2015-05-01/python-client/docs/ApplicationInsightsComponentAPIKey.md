# ApplicationInsightsComponentAPIKey

Properties that define an API key of an Application Insights Component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The API key value. It will be only return once when the API Key was created. | [optional] [readonly] 
**created_date** | **str** | The create date of this API key. | [optional] 
**id** | **str** | The unique ID of the API key inside an Application Insights component. It is auto generated when the API key is created. | [optional] [readonly] 
**linked_read_properties** | **List[str]** | The read access rights of this API Key. | [optional] 
**linked_write_properties** | **List[str]** | The write access rights of this API Key. | [optional] 
**name** | **str** | The name of the API key. | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_api_key import ApplicationInsightsComponentAPIKey

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentAPIKey from a JSON string
application_insights_component_api_key_instance = ApplicationInsightsComponentAPIKey.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentAPIKey.to_json())

# convert the object into a dict
application_insights_component_api_key_dict = application_insights_component_api_key_instance.to_dict()
# create an instance of ApplicationInsightsComponentAPIKey from a dict
application_insights_component_api_key_from_dict = ApplicationInsightsComponentAPIKey.from_dict(application_insights_component_api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


