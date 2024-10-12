# ApplicationInsightsComponentFavorite

Properties that define a favorite that is associated to an Application Insights component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Favorite category, as defined by the user at creation time. | [optional] 
**config** | **str** | Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON | [optional] 
**favorite_id** | **str** | Internally assigned unique id of the favorite definition. | [optional] [readonly] 
**favorite_type** | **str** | Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component. | [optional] 
**is_generated_from_template** | **bool** | Flag denoting wether or not this favorite was generated from a template. | [optional] 
**name** | **str** | The user-defined name of the favorite. | [optional] 
**source_type** | **str** | The source of the favorite definition. | [optional] 
**tags** | **List[str]** | A list of 0 or more tags that are associated with this favorite definition | [optional] 
**time_modified** | **str** | Date and time in UTC of the last modification that was made to this favorite definition. | [optional] [readonly] 
**user_id** | **str** | Unique user id of the specific user that owns this favorite. | [optional] [readonly] 
**version** | **str** | This instance&#39;s version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search. | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_favorite import ApplicationInsightsComponentFavorite

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentFavorite from a JSON string
application_insights_component_favorite_instance = ApplicationInsightsComponentFavorite.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentFavorite.to_json())

# convert the object into a dict
application_insights_component_favorite_dict = application_insights_component_favorite_instance.to_dict()
# create an instance of ApplicationInsightsComponentFavorite from a dict
application_insights_component_favorite_from_dict = ApplicationInsightsComponentFavorite.from_dict(application_insights_component_favorite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


