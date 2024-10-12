# Asset

Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time at which the asset was created in Security Command Center. | [optional] 
**name** | **str** | The relative resource name of this asset. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: \&quot;organizations/{organization_id}/assets/{asset_id}\&quot;. | [optional] 
**resource_properties** | **Dict[str, object]** | Resource managed properties. These properties are managed and defined by the Google Cloud resource and cannot be modified by the user. | [optional] 
**security_center_properties** | [**SecurityCenterProperties**](SecurityCenterProperties.md) |  | [optional] 
**security_marks** | [**GoogleCloudSecuritycenterV1beta1SecurityMarks**](GoogleCloudSecuritycenterV1beta1SecurityMarks.md) |  | [optional] 
**update_time** | **str** | The time at which the asset was last updated, added, or deleted in Security Command Center. | [optional] 

## Example

```python
from openapi_client.models.asset import Asset

# TODO update the JSON string below
json = "{}"
# create an instance of Asset from a JSON string
asset_instance = Asset.from_json(json)
# print the JSON string representation of the object
print(Asset.to_json())

# convert the object into a dict
asset_dict = asset_instance.to_dict()
# create an instance of Asset from a dict
asset_from_dict = Asset.from_dict(asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


