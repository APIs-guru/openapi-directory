# GoogleCloudDialogflowCxV3ListGeneratorsResponse

The response message for Generators.ListGenerators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generators** | [**List[GoogleCloudDialogflowCxV3Generator]**](GoogleCloudDialogflowCxV3Generator.md) | The list of generators. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_generators_response import GoogleCloudDialogflowCxV3ListGeneratorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListGeneratorsResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_generators_response_instance = GoogleCloudDialogflowCxV3ListGeneratorsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListGeneratorsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_generators_response_dict = google_cloud_dialogflow_cx_v3_list_generators_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListGeneratorsResponse from a dict
google_cloud_dialogflow_cx_v3_list_generators_response_from_dict = GoogleCloudDialogflowCxV3ListGeneratorsResponse.from_dict(google_cloud_dialogflow_cx_v3_list_generators_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


