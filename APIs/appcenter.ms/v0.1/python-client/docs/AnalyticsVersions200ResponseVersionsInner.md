# AnalyticsVersions200ResponseVersionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Version count. | [optional] 
**previous_count** | **int** | The count of previous time range of the version. | [optional] 
**version** | **str** | Version. | [optional] 

## Example

```python
from openapi_client.models.analytics_versions200_response_versions_inner import AnalyticsVersions200ResponseVersionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsVersions200ResponseVersionsInner from a JSON string
analytics_versions200_response_versions_inner_instance = AnalyticsVersions200ResponseVersionsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsVersions200ResponseVersionsInner.to_json())

# convert the object into a dict
analytics_versions200_response_versions_inner_dict = analytics_versions200_response_versions_inner_instance.to_dict()
# create an instance of AnalyticsVersions200ResponseVersionsInner from a dict
analytics_versions200_response_versions_inner_from_dict = AnalyticsVersions200ResponseVersionsInner.from_dict(analytics_versions200_response_versions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


