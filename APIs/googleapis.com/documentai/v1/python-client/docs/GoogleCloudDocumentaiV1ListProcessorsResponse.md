# GoogleCloudDocumentaiV1ListProcessorsResponse

Response message for the ListProcessors method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Points to the next processor, otherwise empty. | [optional] 
**processors** | [**List[GoogleCloudDocumentaiV1Processor]**](GoogleCloudDocumentaiV1Processor.md) | The list of processors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_list_processors_response import GoogleCloudDocumentaiV1ListProcessorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ListProcessorsResponse from a JSON string
google_cloud_documentai_v1_list_processors_response_instance = GoogleCloudDocumentaiV1ListProcessorsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ListProcessorsResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1_list_processors_response_dict = google_cloud_documentai_v1_list_processors_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ListProcessorsResponse from a dict
google_cloud_documentai_v1_list_processors_response_from_dict = GoogleCloudDocumentaiV1ListProcessorsResponse.from_dict(google_cloud_documentai_v1_list_processors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


