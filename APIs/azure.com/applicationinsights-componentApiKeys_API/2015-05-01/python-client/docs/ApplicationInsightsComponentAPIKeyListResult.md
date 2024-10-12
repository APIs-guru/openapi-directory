# ApplicationInsightsComponentAPIKeyListResult

Describes the list of API Keys of an Application Insights Component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ApplicationInsightsComponentAPIKey]**](ApplicationInsightsComponentAPIKey.md) | List of API Key definitions. | 

## Example

```python
from openapi_client.models.application_insights_component_api_key_list_result import ApplicationInsightsComponentAPIKeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentAPIKeyListResult from a JSON string
application_insights_component_api_key_list_result_instance = ApplicationInsightsComponentAPIKeyListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentAPIKeyListResult.to_json())

# convert the object into a dict
application_insights_component_api_key_list_result_dict = application_insights_component_api_key_list_result_instance.to_dict()
# create an instance of ApplicationInsightsComponentAPIKeyListResult from a dict
application_insights_component_api_key_list_result_from_dict = ApplicationInsightsComponentAPIKeyListResult.from_dict(application_insights_component_api_key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


