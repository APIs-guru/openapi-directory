# GoogleCloudServicebrokerV1alpha1DashboardClient

Message containing information required to activate Dashboard SSO feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the Oauth client that the dashboard will use. | [optional] 
**redirect_uri** | **str** | A URI for the service dashboard. Validated by the OAuth token server when the dashboard requests a token. | [optional] 
**secret** | **str** | A secret for the dashboard client. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1alpha1_dashboard_client import GoogleCloudServicebrokerV1alpha1DashboardClient

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1alpha1DashboardClient from a JSON string
google_cloud_servicebroker_v1alpha1_dashboard_client_instance = GoogleCloudServicebrokerV1alpha1DashboardClient.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1alpha1DashboardClient.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1alpha1_dashboard_client_dict = google_cloud_servicebroker_v1alpha1_dashboard_client_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1alpha1DashboardClient from a dict
google_cloud_servicebroker_v1alpha1_dashboard_client_from_dict = GoogleCloudServicebrokerV1alpha1DashboardClient.from_dict(google_cloud_servicebroker_v1alpha1_dashboard_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


