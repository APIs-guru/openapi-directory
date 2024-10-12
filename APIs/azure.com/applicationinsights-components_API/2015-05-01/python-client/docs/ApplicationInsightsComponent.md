# ApplicationInsightsComponent

An Application Insights component definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone. | 
**properties** | [**ApplicationInsightsComponentProperties**](ApplicationInsightsComponentProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component import ApplicationInsightsComponent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponent from a JSON string
application_insights_component_instance = ApplicationInsightsComponent.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponent.to_json())

# convert the object into a dict
application_insights_component_dict = application_insights_component_instance.to_dict()
# create an instance of ApplicationInsightsComponent from a dict
application_insights_component_from_dict = ApplicationInsightsComponent.from_dict(application_insights_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


