# GoogleCloudDataplexV1ListDataScansResponse

List dataScans response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_scans** | [**List[GoogleCloudDataplexV1DataScan]**](GoogleCloudDataplexV1DataScan.md) | DataScans (BASIC view only) under the given parent location. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_data_scans_response import GoogleCloudDataplexV1ListDataScansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListDataScansResponse from a JSON string
google_cloud_dataplex_v1_list_data_scans_response_instance = GoogleCloudDataplexV1ListDataScansResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListDataScansResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_data_scans_response_dict = google_cloud_dataplex_v1_list_data_scans_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListDataScansResponse from a dict
google_cloud_dataplex_v1_list_data_scans_response_from_dict = GoogleCloudDataplexV1ListDataScansResponse.from_dict(google_cloud_dataplex_v1_list_data_scans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


