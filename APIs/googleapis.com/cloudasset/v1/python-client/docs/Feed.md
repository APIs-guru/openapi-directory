# Feed

An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_names** | **List[str]** | A list of the full names of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60;. For a list of the full names for supported asset types, see [Resource name format](/asset-inventory/docs/resource-name-format). | [optional] 
**asset_types** | **List[str]** | A list of types of the assets to receive updates. You must specify either or both of asset_names and asset_types. Only asset updates matching specified asset_names or asset_types are exported to the feed. Example: &#x60;\&quot;compute.googleapis.com/Disk\&quot;&#x60; For a list of all supported asset types, see [Supported asset types](/asset-inventory/docs/supported-asset-types). | [optional] 
**condition** | [**Expr**](Expr.md) |  | [optional] 
**content_type** | **str** | Asset content type. If not specified, no content but the asset name and type will be returned. | [optional] 
**feed_output_config** | [**FeedOutputConfig**](FeedOutputConfig.md) |  | [optional] 
**name** | **str** | Required. The format will be projects/{project_number}/feeds/{client-assigned_feed_identifier} or folders/{folder_number}/feeds/{client-assigned_feed_identifier} or organizations/{organization_number}/feeds/{client-assigned_feed_identifier} The client-assigned feed identifier must be unique within the parent project/folder/organization. | [optional] 
**relationship_types** | **List[str]** | A list of relationship types to output, for example: &#x60;INSTANCE_TO_INSTANCEGROUP&#x60;. This field should only be specified if content_type&#x3D;RELATIONSHIP. * If specified: it outputs specified relationship updates on the [asset_names] or the [asset_types]. It returns an error if any of the [relationship_types] doesn&#39;t belong to the supported relationship types of the [asset_names] or [asset_types], or any of the [asset_names] or the [asset_types] doesn&#39;t belong to the source types of the [relationship_types]. * Otherwise: it outputs the supported relationships of the types of [asset_names] and [asset_types] or returns an error if any of the [asset_names] or the [asset_types] has no replationship support. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types. | [optional] 

## Example

```python
from openapi_client.models.feed import Feed

# TODO update the JSON string below
json = "{}"
# create an instance of Feed from a JSON string
feed_instance = Feed.from_json(json)
# print the JSON string representation of the object
print(Feed.to_json())

# convert the object into a dict
feed_dict = feed_instance.to_dict()
# create an instance of Feed from a dict
feed_from_dict = Feed.from_dict(feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


