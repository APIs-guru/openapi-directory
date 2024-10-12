# GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse

Response of ListViolations endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next page token. Returns empty if reached the last page. | [optional] 
**violations** | [**List[GoogleCloudAssuredworkloadsV1beta1Violation]**](GoogleCloudAssuredworkloadsV1beta1Violation.md) | List of Violations under a Workload. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_list_violations_response import GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse from a JSON string
google_cloud_assuredworkloads_v1beta1_list_violations_response_instance = GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_list_violations_response_dict = google_cloud_assuredworkloads_v1beta1_list_violations_response_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse from a dict
google_cloud_assuredworkloads_v1beta1_list_violations_response_from_dict = GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse.from_dict(google_cloud_assuredworkloads_v1beta1_list_violations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


