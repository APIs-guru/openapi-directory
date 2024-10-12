# AnalyticsOperatingSystemCounts200ResponseOsesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count current of OS. | [optional] 
**os_name** | **str** | OS name. | [optional] 
**previous_count** | **int** | Count of previous OS. | [optional] 

## Example

```python
from openapi_client.models.analytics_operating_system_counts200_response_oses_inner import AnalyticsOperatingSystemCounts200ResponseOsesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsOperatingSystemCounts200ResponseOsesInner from a JSON string
analytics_operating_system_counts200_response_oses_inner_instance = AnalyticsOperatingSystemCounts200ResponseOsesInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsOperatingSystemCounts200ResponseOsesInner.to_json())

# convert the object into a dict
analytics_operating_system_counts200_response_oses_inner_dict = analytics_operating_system_counts200_response_oses_inner_instance.to_dict()
# create an instance of AnalyticsOperatingSystemCounts200ResponseOsesInner from a dict
analytics_operating_system_counts200_response_oses_inner_from_dict = AnalyticsOperatingSystemCounts200ResponseOsesInner.from_dict(analytics_operating_system_counts200_response_oses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


