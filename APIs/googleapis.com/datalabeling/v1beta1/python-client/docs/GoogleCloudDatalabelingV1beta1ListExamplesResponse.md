# GoogleCloudDatalabelingV1beta1ListExamplesResponse

Results of listing Examples in and annotated dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**examples** | [**List[GoogleCloudDatalabelingV1beta1Example]**](GoogleCloudDatalabelingV1beta1Example.md) | The list of examples to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_examples_response import GoogleCloudDatalabelingV1beta1ListExamplesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListExamplesResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_examples_response_instance = GoogleCloudDatalabelingV1beta1ListExamplesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListExamplesResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_examples_response_dict = google_cloud_datalabeling_v1beta1_list_examples_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListExamplesResponse from a dict
google_cloud_datalabeling_v1beta1_list_examples_response_from_dict = GoogleCloudDatalabelingV1beta1ListExamplesResponse.from_dict(google_cloud_datalabeling_v1beta1_list_examples_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


