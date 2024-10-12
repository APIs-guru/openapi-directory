# GoogleCloudRetailV2ImportUserEventsRequest

Request message for the ImportUserEvents request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors_config** | [**GoogleCloudRetailV2ImportErrorsConfig**](GoogleCloudRetailV2ImportErrorsConfig.md) |  | [optional] 
**input_config** | [**GoogleCloudRetailV2UserEventInputConfig**](GoogleCloudRetailV2UserEventInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_import_user_events_request import GoogleCloudRetailV2ImportUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ImportUserEventsRequest from a JSON string
google_cloud_retail_v2_import_user_events_request_instance = GoogleCloudRetailV2ImportUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ImportUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_import_user_events_request_dict = google_cloud_retail_v2_import_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2ImportUserEventsRequest from a dict
google_cloud_retail_v2_import_user_events_request_from_dict = GoogleCloudRetailV2ImportUserEventsRequest.from_dict(google_cloud_retail_v2_import_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


