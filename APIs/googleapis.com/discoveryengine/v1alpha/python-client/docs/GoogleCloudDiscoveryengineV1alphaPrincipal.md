# GoogleCloudDiscoveryengineV1alphaPrincipal

Principal identifier of a user or a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | Group identifier. For Google Workspace user account, group_id should be the google workspace group email. For non-google identity provider user account, group_id is the mapped group identifier configured during the workforcepool config. | [optional] 
**user_id** | **str** | User identifier. For Google Workspace user account, user_id should be the google workspace user email. For non-google identity provider user account, user_id is the mapped user identifier configured during the workforcepool config. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_principal import GoogleCloudDiscoveryengineV1alphaPrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPrincipal from a JSON string
google_cloud_discoveryengine_v1alpha_principal_instance = GoogleCloudDiscoveryengineV1alphaPrincipal.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPrincipal.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_principal_dict = google_cloud_discoveryengine_v1alpha_principal_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPrincipal from a dict
google_cloud_discoveryengine_v1alpha_principal_from_dict = GoogleCloudDiscoveryengineV1alphaPrincipal.from_dict(google_cloud_discoveryengine_v1alpha_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


