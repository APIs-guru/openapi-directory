# ApplicationInsightsComponentWebTestLocation

Properties that define a web test location available to an Application Insights Component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the web test location. | [optional] [readonly] 
**tag** | **str** | Internally defined geographic location tag. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_web_test_location import ApplicationInsightsComponentWebTestLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentWebTestLocation from a JSON string
application_insights_component_web_test_location_instance = ApplicationInsightsComponentWebTestLocation.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentWebTestLocation.to_json())

# convert the object into a dict
application_insights_component_web_test_location_dict = application_insights_component_web_test_location_instance.to_dict()
# create an instance of ApplicationInsightsComponentWebTestLocation from a dict
application_insights_component_web_test_location_from_dict = ApplicationInsightsComponentWebTestLocation.from_dict(application_insights_component_web_test_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


