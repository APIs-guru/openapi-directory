# GoogleCloudRetailV2alphaImportUserEventsRequest

Request message for the ImportUserEvents request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors_config** | [**GoogleCloudRetailV2alphaImportErrorsConfig**](GoogleCloudRetailV2alphaImportErrorsConfig.md) |  | [optional] 
**input_config** | [**GoogleCloudRetailV2alphaUserEventInputConfig**](GoogleCloudRetailV2alphaUserEventInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_import_user_events_request import GoogleCloudRetailV2alphaImportUserEventsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaImportUserEventsRequest from a JSON string
google_cloud_retail_v2alpha_import_user_events_request_instance = GoogleCloudRetailV2alphaImportUserEventsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaImportUserEventsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_import_user_events_request_dict = google_cloud_retail_v2alpha_import_user_events_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaImportUserEventsRequest from a dict
google_cloud_retail_v2alpha_import_user_events_request_from_dict = GoogleCloudRetailV2alphaImportUserEventsRequest.from_dict(google_cloud_retail_v2alpha_import_user_events_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


