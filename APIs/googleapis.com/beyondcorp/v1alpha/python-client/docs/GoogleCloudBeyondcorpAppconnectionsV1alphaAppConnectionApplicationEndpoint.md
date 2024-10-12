# GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint

ApplicationEndpoint represents a remote application endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Required. Hostname or IP address of the remote application endpoint. | [optional] 
**port** | **int** | Required. Port of the remote application endpoint. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnections_v1alpha_app_connection_application_endpoint import GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint from a JSON string
google_cloud_beyondcorp_appconnections_v1alpha_app_connection_application_endpoint_instance = GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnections_v1alpha_app_connection_application_endpoint_dict = google_cloud_beyondcorp_appconnections_v1alpha_app_connection_application_endpoint_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint from a dict
google_cloud_beyondcorp_appconnections_v1alpha_app_connection_application_endpoint_from_dict = GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint.from_dict(google_cloud_beyondcorp_appconnections_v1alpha_app_connection_application_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


