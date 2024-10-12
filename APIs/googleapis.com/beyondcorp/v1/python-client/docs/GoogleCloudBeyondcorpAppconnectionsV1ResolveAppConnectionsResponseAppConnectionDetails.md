# GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails

Details of the AppConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_connection** | [**GoogleCloudBeyondcorpAppconnectionsV1AppConnection**](GoogleCloudBeyondcorpAppconnectionsV1AppConnection.md) |  | [optional] 
**recent_mig_vms** | **List[str]** | If type&#x3D;GCP_REGIONAL_MIG, contains most recent VM instances, like &#x60;https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone_id}/instances/{instance_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnections_v1_resolve_app_connections_response_app_connection_details import GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails from a JSON string
google_cloud_beyondcorp_appconnections_v1_resolve_app_connections_response_app_connection_details_instance = GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnections_v1_resolve_app_connections_response_app_connection_details_dict = google_cloud_beyondcorp_appconnections_v1_resolve_app_connections_response_app_connection_details_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails from a dict
google_cloud_beyondcorp_appconnections_v1_resolve_app_connections_response_app_connection_details_from_dict = GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails.from_dict(google_cloud_beyondcorp_appconnections_v1_resolve_app_connections_response_app_connection_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


