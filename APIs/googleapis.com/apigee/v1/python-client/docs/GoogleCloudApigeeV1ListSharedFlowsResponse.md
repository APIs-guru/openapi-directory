# GoogleCloudApigeeV1ListSharedFlowsResponse

To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shared_flows** | [**List[GoogleCloudApigeeV1SharedFlow]**](GoogleCloudApigeeV1SharedFlow.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_shared_flows_response import GoogleCloudApigeeV1ListSharedFlowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListSharedFlowsResponse from a JSON string
google_cloud_apigee_v1_list_shared_flows_response_instance = GoogleCloudApigeeV1ListSharedFlowsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListSharedFlowsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_shared_flows_response_dict = google_cloud_apigee_v1_list_shared_flows_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListSharedFlowsResponse from a dict
google_cloud_apigee_v1_list_shared_flows_response_from_dict = GoogleCloudApigeeV1ListSharedFlowsResponse.from_dict(google_cloud_apigee_v1_list_shared_flows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


