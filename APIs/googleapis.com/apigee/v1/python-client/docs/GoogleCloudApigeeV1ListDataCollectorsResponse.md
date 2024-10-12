# GoogleCloudApigeeV1ListDataCollectorsResponse

Response for ListDataCollectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_collectors** | [**List[GoogleCloudApigeeV1DataCollector]**](GoogleCloudApigeeV1DataCollector.md) | Data collectors in the specified organization. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_data_collectors_response import GoogleCloudApigeeV1ListDataCollectorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListDataCollectorsResponse from a JSON string
google_cloud_apigee_v1_list_data_collectors_response_instance = GoogleCloudApigeeV1ListDataCollectorsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListDataCollectorsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_data_collectors_response_dict = google_cloud_apigee_v1_list_data_collectors_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListDataCollectorsResponse from a dict
google_cloud_apigee_v1_list_data_collectors_response_from_dict = GoogleCloudApigeeV1ListDataCollectorsResponse.from_dict(google_cloud_apigee_v1_list_data_collectors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


