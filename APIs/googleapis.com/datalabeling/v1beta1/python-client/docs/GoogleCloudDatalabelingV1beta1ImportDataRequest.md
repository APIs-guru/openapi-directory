# GoogleCloudDatalabelingV1beta1ImportDataRequest

Request message for ImportData API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**GoogleCloudDatalabelingV1beta1InputConfig**](GoogleCloudDatalabelingV1beta1InputConfig.md) |  | [optional] 
**user_email_address** | **str** | Email of the user who started the import task and should be notified by email. If empty no notification will be sent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_import_data_request import GoogleCloudDatalabelingV1beta1ImportDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ImportDataRequest from a JSON string
google_cloud_datalabeling_v1beta1_import_data_request_instance = GoogleCloudDatalabelingV1beta1ImportDataRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ImportDataRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_import_data_request_dict = google_cloud_datalabeling_v1beta1_import_data_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ImportDataRequest from a dict
google_cloud_datalabeling_v1beta1_import_data_request_from_dict = GoogleCloudDatalabelingV1beta1ImportDataRequest.from_dict(google_cloud_datalabeling_v1beta1_import_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


