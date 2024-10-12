# GoogleCloudApigeeV1DataCollector

Data collector configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Output only. The time at which the data collector was created in milliseconds since the epoch. | [optional] [readonly] 
**description** | **str** | A description of the data collector. | [optional] 
**last_modified_at** | **str** | Output only. The time at which the Data Collector was last updated in milliseconds since the epoch. | [optional] [readonly] 
**name** | **str** | ID of the data collector. Must begin with &#x60;dc_&#x60;. | [optional] 
**type** | **str** | Immutable. The type of data this data collector will collect. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_data_collector import GoogleCloudApigeeV1DataCollector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DataCollector from a JSON string
google_cloud_apigee_v1_data_collector_instance = GoogleCloudApigeeV1DataCollector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DataCollector.to_json())

# convert the object into a dict
google_cloud_apigee_v1_data_collector_dict = google_cloud_apigee_v1_data_collector_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DataCollector from a dict
google_cloud_apigee_v1_data_collector_from_dict = GoogleCloudApigeeV1DataCollector.from_dict(google_cloud_apigee_v1_data_collector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


