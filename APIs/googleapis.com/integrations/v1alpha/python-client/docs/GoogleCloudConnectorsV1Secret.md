# GoogleCloudConnectorsV1Secret

Secret provides a reference to entries in Secret Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_version** | **str** | The resource name of the secret version in the format, format as: &#x60;projects/*/secrets/*/versions/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_secret import GoogleCloudConnectorsV1Secret

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1Secret from a JSON string
google_cloud_connectors_v1_secret_instance = GoogleCloudConnectorsV1Secret.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1Secret.to_json())

# convert the object into a dict
google_cloud_connectors_v1_secret_dict = google_cloud_connectors_v1_secret_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1Secret from a dict
google_cloud_connectors_v1_secret_from_dict = GoogleCloudConnectorsV1Secret.from_dict(google_cloud_connectors_v1_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


