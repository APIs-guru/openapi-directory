# GoogleCloudDialogflowV2ListAnswerRecordsResponse

Response message for AnswerRecords.ListAnswerRecords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_records** | [**List[GoogleCloudDialogflowV2AnswerRecord]**](GoogleCloudDialogflowV2AnswerRecord.md) | The list of answer records. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Or empty if there are no more results. Pass this value in the ListAnswerRecordsRequest.page_token field in the subsequent call to &#x60;ListAnswerRecords&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_answer_records_response import GoogleCloudDialogflowV2ListAnswerRecordsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListAnswerRecordsResponse from a JSON string
google_cloud_dialogflow_v2_list_answer_records_response_instance = GoogleCloudDialogflowV2ListAnswerRecordsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListAnswerRecordsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_answer_records_response_dict = google_cloud_dialogflow_v2_list_answer_records_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListAnswerRecordsResponse from a dict
google_cloud_dialogflow_v2_list_answer_records_response_from_dict = GoogleCloudDialogflowV2ListAnswerRecordsResponse.from_dict(google_cloud_dialogflow_v2_list_answer_records_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


