# GoogleCloudDatacatalogV1beta1UsageSignal

The set of all usage signals that we store in Data Catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_time** | **str** | The timestamp of the end of the usage statistics duration. | [optional] 
**usage_within_time_range** | [**Dict[str, GoogleCloudDatacatalogV1beta1UsageStats]**](GoogleCloudDatacatalogV1beta1UsageStats.md) | Usage statistics over each of the pre-defined time ranges, supported strings for time ranges are {\&quot;24H\&quot;, \&quot;7D\&quot;, \&quot;30D\&quot;}. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_usage_signal import GoogleCloudDatacatalogV1beta1UsageSignal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1UsageSignal from a JSON string
google_cloud_datacatalog_v1beta1_usage_signal_instance = GoogleCloudDatacatalogV1beta1UsageSignal.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1UsageSignal.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_usage_signal_dict = google_cloud_datacatalog_v1beta1_usage_signal_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1UsageSignal from a dict
google_cloud_datacatalog_v1beta1_usage_signal_from_dict = GoogleCloudDatacatalogV1beta1UsageSignal.from_dict(google_cloud_datacatalog_v1beta1_usage_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


