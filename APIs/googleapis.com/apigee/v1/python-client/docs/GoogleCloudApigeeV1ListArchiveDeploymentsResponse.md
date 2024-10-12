# GoogleCloudApigeeV1ListArchiveDeploymentsResponse

Response for ListArchiveDeployments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_deployments** | [**List[GoogleCloudApigeeV1ArchiveDeployment]**](GoogleCloudApigeeV1ArchiveDeployment.md) | Archive Deployments in the specified environment. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_archive_deployments_response import GoogleCloudApigeeV1ListArchiveDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListArchiveDeploymentsResponse from a JSON string
google_cloud_apigee_v1_list_archive_deployments_response_instance = GoogleCloudApigeeV1ListArchiveDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListArchiveDeploymentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_archive_deployments_response_dict = google_cloud_apigee_v1_list_archive_deployments_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListArchiveDeploymentsResponse from a dict
google_cloud_apigee_v1_list_archive_deployments_response_from_dict = GoogleCloudApigeeV1ListArchiveDeploymentsResponse.from_dict(google_cloud_apigee_v1_list_archive_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


