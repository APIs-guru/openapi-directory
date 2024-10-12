# GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent

The list of messages or conditional cases to activate for this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_cases** | [**GoogleCloudDialogflowCxV3FulfillmentConditionalCases**](GoogleCloudDialogflowCxV3FulfillmentConditionalCases.md) |  | [optional] 
**message** | [**GoogleCloudDialogflowCxV3ResponseMessage**](GoogleCloudDialogflowCxV3ResponseMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_case_content import GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent from a JSON string
google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_case_content_instance = GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_case_content_dict = google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_case_content_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent from a dict
google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_case_content_from_dict = GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent.from_dict(google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_case_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


