# GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest

The request message to annotate an Assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Optional. A stable account identifier to apply to the assessment. This is an alternative to setting &#x60;account_id&#x60; in &#x60;CreateAssessment&#x60;, for example when a stable account identifier is not yet known in the initial request. | [optional] 
**annotation** | **str** | Optional. The annotation that will be assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent. | [optional] 
**hashed_account_id** | **bytearray** | Optional. A stable hashed account identifier to apply to the assessment. This is an alternative to setting &#x60;hashed_account_id&#x60; in &#x60;CreateAssessment&#x60;, for example when a stable account identifier is not yet known in the initial request. | [optional] 
**reasons** | **List[str]** | Optional. Reasons for the annotation that are assigned to the event. | [optional] 
**transaction_event** | [**GoogleCloudRecaptchaenterpriseV1TransactionEvent**](GoogleCloudRecaptchaenterpriseV1TransactionEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_annotate_assessment_request import GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest from a JSON string
google_cloud_recaptchaenterprise_v1_annotate_assessment_request_instance = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_annotate_assessment_request_dict = google_cloud_recaptchaenterprise_v1_annotate_assessment_request_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest from a dict
google_cloud_recaptchaenterprise_v1_annotate_assessment_request_from_dict = GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.from_dict(google_cloud_recaptchaenterprise_v1_annotate_assessment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


