# GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases

A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cases** | [**List[GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase]**](GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase.md) | A list of cascading if-else conditions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_fulfillment_conditional_cases import GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases from a JSON string
google_cloud_dialogflow_cx_v3beta1_fulfillment_conditional_cases_instance = GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_fulfillment_conditional_cases_dict = google_cloud_dialogflow_cx_v3beta1_fulfillment_conditional_cases_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases from a dict
google_cloud_dialogflow_cx_v3beta1_fulfillment_conditional_cases_from_dict = GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases.from_dict(google_cloud_dialogflow_cx_v3beta1_fulfillment_conditional_cases_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


