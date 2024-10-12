# ApplicationInsightsWebTestLocationsListResult

Describes the list of web test locations available to an Application Insights Component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ApplicationInsightsComponentWebTestLocation]**](ApplicationInsightsComponentWebTestLocation.md) | List of web test locations. | 

## Example

```python
from openapi_client.models.application_insights_web_test_locations_list_result import ApplicationInsightsWebTestLocationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsWebTestLocationsListResult from a JSON string
application_insights_web_test_locations_list_result_instance = ApplicationInsightsWebTestLocationsListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsWebTestLocationsListResult.to_json())

# convert the object into a dict
application_insights_web_test_locations_list_result_dict = application_insights_web_test_locations_list_result_instance.to_dict()
# create an instance of ApplicationInsightsWebTestLocationsListResult from a dict
application_insights_web_test_locations_list_result_from_dict = ApplicationInsightsWebTestLocationsListResult.from_dict(application_insights_web_test_locations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


