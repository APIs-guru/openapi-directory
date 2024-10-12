# GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase

Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_content** | [**List[GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent]**](GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent.md) | A list of case content. | [optional] 
**condition** | **str** | The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case import GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase from a JSON string
google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_instance = GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_dict = google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase from a dict
google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_from_dict = GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase.from_dict(google_cloud_dialogflow_cx_v3_fulfillment_conditional_cases_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


