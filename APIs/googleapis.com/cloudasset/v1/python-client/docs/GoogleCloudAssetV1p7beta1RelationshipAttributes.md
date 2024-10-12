# GoogleCloudAssetV1p7beta1RelationshipAttributes

The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The detail of the relationship, e.g. &#x60;contains&#x60;, &#x60;attaches&#x60; | [optional] 
**source_resource_type** | **str** | The source asset type. Example: &#x60;compute.googleapis.com/Instance&#x60; | [optional] 
**target_resource_type** | **str** | The target asset type. Example: &#x60;compute.googleapis.com/Disk&#x60; | [optional] 
**type** | **str** | The unique identifier of the relationship type. Example: &#x60;INSTANCE_TO_INSTANCEGROUP&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1p7beta1_relationship_attributes import GoogleCloudAssetV1p7beta1RelationshipAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1p7beta1RelationshipAttributes from a JSON string
google_cloud_asset_v1p7beta1_relationship_attributes_instance = GoogleCloudAssetV1p7beta1RelationshipAttributes.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1p7beta1RelationshipAttributes.to_json())

# convert the object into a dict
google_cloud_asset_v1p7beta1_relationship_attributes_dict = google_cloud_asset_v1p7beta1_relationship_attributes_instance.to_dict()
# create an instance of GoogleCloudAssetV1p7beta1RelationshipAttributes from a dict
google_cloud_asset_v1p7beta1_relationship_attributes_from_dict = GoogleCloudAssetV1p7beta1RelationshipAttributes.from_dict(google_cloud_asset_v1p7beta1_relationship_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


