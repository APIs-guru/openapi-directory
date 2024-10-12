# GoogleCloudRetailV2ConditionTimeRange

Used for time-dependent conditions. Example: Want to have rule applied for week long sale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | End of time range. Range is inclusive. | [optional] 
**start_time** | **str** | Start of time range. Range is inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_condition_time_range import GoogleCloudRetailV2ConditionTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ConditionTimeRange from a JSON string
google_cloud_retail_v2_condition_time_range_instance = GoogleCloudRetailV2ConditionTimeRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ConditionTimeRange.to_json())

# convert the object into a dict
google_cloud_retail_v2_condition_time_range_dict = google_cloud_retail_v2_condition_time_range_instance.to_dict()
# create an instance of GoogleCloudRetailV2ConditionTimeRange from a dict
google_cloud_retail_v2_condition_time_range_from_dict = GoogleCloudRetailV2ConditionTimeRange.from_dict(google_cloud_retail_v2_condition_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


