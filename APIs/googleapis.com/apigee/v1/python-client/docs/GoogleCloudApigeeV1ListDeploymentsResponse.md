# GoogleCloudApigeeV1ListDeploymentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployments** | [**List[GoogleCloudApigeeV1Deployment]**](GoogleCloudApigeeV1Deployment.md) | List of deployments. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_deployments_response import GoogleCloudApigeeV1ListDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListDeploymentsResponse from a JSON string
google_cloud_apigee_v1_list_deployments_response_instance = GoogleCloudApigeeV1ListDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListDeploymentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_deployments_response_dict = google_cloud_apigee_v1_list_deployments_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListDeploymentsResponse from a dict
google_cloud_apigee_v1_list_deployments_response_from_dict = GoogleCloudApigeeV1ListDeploymentsResponse.from_dict(google_cloud_apigee_v1_list_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


