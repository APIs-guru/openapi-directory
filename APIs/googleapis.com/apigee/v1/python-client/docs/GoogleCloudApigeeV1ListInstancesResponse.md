# GoogleCloudApigeeV1ListInstancesResponse

Response for ListInstances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[GoogleCloudApigeeV1Instance]**](GoogleCloudApigeeV1Instance.md) | Instances in the specified organization. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_instances_response import GoogleCloudApigeeV1ListInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListInstancesResponse from a JSON string
google_cloud_apigee_v1_list_instances_response_instance = GoogleCloudApigeeV1ListInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListInstancesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_instances_response_dict = google_cloud_apigee_v1_list_instances_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListInstancesResponse from a dict
google_cloud_apigee_v1_list_instances_response_from_dict = GoogleCloudApigeeV1ListInstancesResponse.from_dict(google_cloud_apigee_v1_list_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


