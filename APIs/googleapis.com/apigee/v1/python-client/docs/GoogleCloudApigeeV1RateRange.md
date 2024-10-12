# GoogleCloudApigeeV1RateRange

API call volume range and the fees charged when the total number of API calls is within the range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Ending value of the range. Set to 0 or &#x60;null&#x60; for the last range of values. | [optional] 
**fee** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**start** | **str** | Starting value of the range. Set to 0 or &#x60;null&#x60; for the initial range of values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_rate_range import GoogleCloudApigeeV1RateRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RateRange from a JSON string
google_cloud_apigee_v1_rate_range_instance = GoogleCloudApigeeV1RateRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RateRange.to_json())

# convert the object into a dict
google_cloud_apigee_v1_rate_range_dict = google_cloud_apigee_v1_rate_range_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RateRange from a dict
google_cloud_apigee_v1_rate_range_from_dict = GoogleCloudApigeeV1RateRange.from_dict(google_cloud_apigee_v1_rate_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


