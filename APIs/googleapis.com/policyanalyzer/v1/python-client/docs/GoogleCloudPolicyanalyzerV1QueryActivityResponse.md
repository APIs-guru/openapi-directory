# GoogleCloudPolicyanalyzerV1QueryActivityResponse

Response to the `QueryActivity` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**List[GoogleCloudPolicyanalyzerV1Activity]**](GoogleCloudPolicyanalyzerV1Activity.md) | The set of activities that match the filter included in the request. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;nextPageToken&#x60; is included. To get the next set of results, call this method again using the value of &#x60;nextPageToken&#x60; as &#x60;pageToken&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_policyanalyzer_v1_query_activity_response import GoogleCloudPolicyanalyzerV1QueryActivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicyanalyzerV1QueryActivityResponse from a JSON string
google_cloud_policyanalyzer_v1_query_activity_response_instance = GoogleCloudPolicyanalyzerV1QueryActivityResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicyanalyzerV1QueryActivityResponse.to_json())

# convert the object into a dict
google_cloud_policyanalyzer_v1_query_activity_response_dict = google_cloud_policyanalyzer_v1_query_activity_response_instance.to_dict()
# create an instance of GoogleCloudPolicyanalyzerV1QueryActivityResponse from a dict
google_cloud_policyanalyzer_v1_query_activity_response_from_dict = GoogleCloudPolicyanalyzerV1QueryActivityResponse.from_dict(google_cloud_policyanalyzer_v1_query_activity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


