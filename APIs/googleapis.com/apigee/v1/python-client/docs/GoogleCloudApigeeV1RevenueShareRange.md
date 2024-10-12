# GoogleCloudApigeeV1RevenueShareRange

API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Ending value of the range. Set to 0 or &#x60;null&#x60; for the last range of values. | [optional] 
**share_percentage** | **float** | Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point. | [optional] 
**start** | **str** | Starting value of the range. Set to 0 or &#x60;null&#x60; for the initial range of values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_revenue_share_range import GoogleCloudApigeeV1RevenueShareRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RevenueShareRange from a JSON string
google_cloud_apigee_v1_revenue_share_range_instance = GoogleCloudApigeeV1RevenueShareRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RevenueShareRange.to_json())

# convert the object into a dict
google_cloud_apigee_v1_revenue_share_range_dict = google_cloud_apigee_v1_revenue_share_range_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RevenueShareRange from a dict
google_cloud_apigee_v1_revenue_share_range_from_dict = GoogleCloudApigeeV1RevenueShareRange.from_dict(google_cloud_apigee_v1_revenue_share_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


