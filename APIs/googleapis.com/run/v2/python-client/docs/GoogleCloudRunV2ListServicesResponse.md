# GoogleCloudRunV2ListServicesResponse

Response message containing a list of Services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token indicating there are more items than page_size. Use it in the next ListServices request to continue. | [optional] 
**services** | [**List[GoogleCloudRunV2Service]**](GoogleCloudRunV2Service.md) | The resulting list of Services. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_list_services_response import GoogleCloudRunV2ListServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ListServicesResponse from a JSON string
google_cloud_run_v2_list_services_response_instance = GoogleCloudRunV2ListServicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ListServicesResponse.to_json())

# convert the object into a dict
google_cloud_run_v2_list_services_response_dict = google_cloud_run_v2_list_services_response_instance.to_dict()
# create an instance of GoogleCloudRunV2ListServicesResponse from a dict
google_cloud_run_v2_list_services_response_from_dict = GoogleCloudRunV2ListServicesResponse.from_dict(google_cloud_run_v2_list_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


