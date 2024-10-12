# GoogleCloudIntegrationsV1alphaCoordinate

Configuration detail of coordinate, it used for UI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x** | **int** | Required. X axis of the coordinate | [optional] 
**y** | **int** | Required. Y axis of the coordinate | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_coordinate import GoogleCloudIntegrationsV1alphaCoordinate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCoordinate from a JSON string
google_cloud_integrations_v1alpha_coordinate_instance = GoogleCloudIntegrationsV1alphaCoordinate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCoordinate.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_coordinate_dict = google_cloud_integrations_v1alpha_coordinate_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCoordinate from a dict
google_cloud_integrations_v1alpha_coordinate_from_dict = GoogleCloudIntegrationsV1alphaCoordinate.from_dict(google_cloud_integrations_v1alpha_coordinate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


