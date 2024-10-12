# GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse

Response message for AnswerRecords.ListAnswerRecords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_records** | [**List[GoogleCloudDialogflowV2beta1AnswerRecord]**](GoogleCloudDialogflowV2beta1AnswerRecord.md) | The list of answer records. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Or empty if there are no more results. Pass this value in the ListAnswerRecordsRequest.page_token field in the subsequent call to &#x60;ListAnswerRecords&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_list_answer_records_response import GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse from a JSON string
google_cloud_dialogflow_v2beta1_list_answer_records_response_instance = GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_list_answer_records_response_dict = google_cloud_dialogflow_v2beta1_list_answer_records_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse from a dict
google_cloud_dialogflow_v2beta1_list_answer_records_response_from_dict = GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse.from_dict(google_cloud_dialogflow_v2beta1_list_answer_records_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


