# WebAppsListMetrics200ResponseValueInnerName

Name of a metric for any resource .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | Localized metric name value. | [optional] [readonly] 
**value** | **str** | metric name value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_metrics200_response_value_inner_name import WebAppsListMetrics200ResponseValueInnerName

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListMetrics200ResponseValueInnerName from a JSON string
web_apps_list_metrics200_response_value_inner_name_instance = WebAppsListMetrics200ResponseValueInnerName.from_json(json)
# print the JSON string representation of the object
print(WebAppsListMetrics200ResponseValueInnerName.to_json())

# convert the object into a dict
web_apps_list_metrics200_response_value_inner_name_dict = web_apps_list_metrics200_response_value_inner_name_instance.to_dict()
# create an instance of WebAppsListMetrics200ResponseValueInnerName from a dict
web_apps_list_metrics200_response_value_inner_name_from_dict = WebAppsListMetrics200ResponseValueInnerName.from_dict(web_apps_list_metrics200_response_value_inner_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


