# ExportAssetsRequest

Export asset request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_types** | **List[str]** | A list of asset types to take a snapshot for. For example: \&quot;compute.googleapis.com/Disk\&quot;. Regular expressions are also supported. For example: * \&quot;compute.googleapis.com.*\&quot; snapshots resources whose asset type starts with \&quot;compute.googleapis.com\&quot;. * \&quot;.*Instance\&quot; snapshots resources whose asset type ends with \&quot;Instance\&quot;. * \&quot;.*Instance.*\&quot; snapshots resources whose asset type contains \&quot;Instance\&quot;. See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned. If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types. | [optional] 
**content_type** | **str** | Asset content type. If not specified, no content but the asset name will be returned. | [optional] 
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 
**read_time** | **str** | Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results. | [optional] 
**relationship_types** | **List[str]** | A list of relationship types to export, for example: &#x60;INSTANCE_TO_INSTANCEGROUP&#x60;. This field should only be specified if content_type&#x3D;RELATIONSHIP. * If specified: it snapshots specified relationships. It returns an error if any of the [relationship_types] doesn&#39;t belong to the supported relationship types of the [asset_types] or if any of the [asset_types] doesn&#39;t belong to the source types of the [relationship_types]. * Otherwise: it snapshots the supported relationships for all [asset_types] or returns an error if any of the [asset_types] has no relationship support. An unspecified asset types field means all supported asset_types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types. | [optional] 

## Example

```python
from openapi_client.models.export_assets_request import ExportAssetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportAssetsRequest from a JSON string
export_assets_request_instance = ExportAssetsRequest.from_json(json)
# print the JSON string representation of the object
print(ExportAssetsRequest.to_json())

# convert the object into a dict
export_assets_request_dict = export_assets_request_instance.to_dict()
# create an instance of ExportAssetsRequest from a dict
export_assets_request_from_dict = ExportAssetsRequest.from_dict(export_assets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


