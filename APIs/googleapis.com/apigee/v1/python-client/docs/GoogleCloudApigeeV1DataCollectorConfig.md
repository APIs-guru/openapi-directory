# GoogleCloudApigeeV1DataCollectorConfig

Data collector and its configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the data collector in the following format: &#x60;organizations/{org}/datacollectors/{datacollector}&#x60; | [optional] 
**type** | **str** | Data type accepted by the data collector. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_data_collector_config import GoogleCloudApigeeV1DataCollectorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DataCollectorConfig from a JSON string
google_cloud_apigee_v1_data_collector_config_instance = GoogleCloudApigeeV1DataCollectorConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DataCollectorConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_data_collector_config_dict = google_cloud_apigee_v1_data_collector_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DataCollectorConfig from a dict
google_cloud_apigee_v1_data_collector_config_from_dict = GoogleCloudApigeeV1DataCollectorConfig.from_dict(google_cloud_apigee_v1_data_collector_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


