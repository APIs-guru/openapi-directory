# AnalyticsReleasesParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_group_id** | **str** | distribution group id | 
**release_id** | **int** | release id | 
**user_id** | **str** | user id | 

## Example

```python
from openapi_client.models.analytics_releases_parameter import AnalyticsReleasesParameter

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsReleasesParameter from a JSON string
analytics_releases_parameter_instance = AnalyticsReleasesParameter.from_json(json)
# print the JSON string representation of the object
print(AnalyticsReleasesParameter.to_json())

# convert the object into a dict
analytics_releases_parameter_dict = analytics_releases_parameter_instance.to_dict()
# create an instance of AnalyticsReleasesParameter from a dict
analytics_releases_parameter_from_dict = AnalyticsReleasesParameter.from_dict(analytics_releases_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


