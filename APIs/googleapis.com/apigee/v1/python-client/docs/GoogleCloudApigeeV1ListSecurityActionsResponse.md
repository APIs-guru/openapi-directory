# GoogleCloudApigeeV1ListSecurityActionsResponse

Contains a list of SecurityActions in response to a ListSecurityActionRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**security_actions** | [**List[GoogleCloudApigeeV1SecurityAction]**](GoogleCloudApigeeV1SecurityAction.md) | The SecurityActions for the specified environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_security_actions_response import GoogleCloudApigeeV1ListSecurityActionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListSecurityActionsResponse from a JSON string
google_cloud_apigee_v1_list_security_actions_response_instance = GoogleCloudApigeeV1ListSecurityActionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListSecurityActionsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_security_actions_response_dict = google_cloud_apigee_v1_list_security_actions_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListSecurityActionsResponse from a dict
google_cloud_apigee_v1_list_security_actions_response_from_dict = GoogleCloudApigeeV1ListSecurityActionsResponse.from_dict(google_cloud_apigee_v1_list_security_actions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


