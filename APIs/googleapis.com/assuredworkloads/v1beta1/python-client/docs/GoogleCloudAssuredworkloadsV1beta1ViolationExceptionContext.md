# GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext

Violation exception detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledgement_time** | **str** | Timestamp when the violation was acknowledged. | [optional] 
**comment** | **str** | Business justification provided towards the acknowledgement of the violation. | [optional] 
**user_name** | **str** | Name of the user (or service account) who acknowledged the violation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_violation_exception_context import GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext from a JSON string
google_cloud_assuredworkloads_v1beta1_violation_exception_context_instance = GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_violation_exception_context_dict = google_cloud_assuredworkloads_v1beta1_violation_exception_context_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext from a dict
google_cloud_assuredworkloads_v1beta1_violation_exception_context_from_dict = GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext.from_dict(google_cloud_assuredworkloads_v1beta1_violation_exception_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


