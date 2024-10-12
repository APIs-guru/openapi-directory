# GoogleCloudDataplexV1Trigger

DataScan scheduling and trigger settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_demand** | **object** | The scan runs once via RunDataScan API. | [optional] 
**schedule** | [**GoogleCloudDataplexV1TriggerSchedule**](GoogleCloudDataplexV1TriggerSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_trigger import GoogleCloudDataplexV1Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Trigger from a JSON string
google_cloud_dataplex_v1_trigger_instance = GoogleCloudDataplexV1Trigger.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Trigger.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_trigger_dict = google_cloud_dataplex_v1_trigger_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Trigger from a dict
google_cloud_dataplex_v1_trigger_from_dict = GoogleCloudDataplexV1Trigger.from_dict(google_cloud_dataplex_v1_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


