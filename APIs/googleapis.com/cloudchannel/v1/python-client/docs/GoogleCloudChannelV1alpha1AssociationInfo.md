# GoogleCloudChannelV1alpha1AssociationInfo

Association links that an entitlement has to other entitlements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_entitlement** | **str** | The name of the base entitlement, for which this entitlement is an add-on. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_association_info import GoogleCloudChannelV1alpha1AssociationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1AssociationInfo from a JSON string
google_cloud_channel_v1alpha1_association_info_instance = GoogleCloudChannelV1alpha1AssociationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1AssociationInfo.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_association_info_dict = google_cloud_channel_v1alpha1_association_info_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1AssociationInfo from a dict
google_cloud_channel_v1alpha1_association_info_from_dict = GoogleCloudChannelV1alpha1AssociationInfo.from_dict(google_cloud_channel_v1alpha1_association_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


