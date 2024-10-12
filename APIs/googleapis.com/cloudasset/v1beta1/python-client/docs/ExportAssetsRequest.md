# ExportAssetsRequest

Export asset request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_types** | **List[str]** | A list of asset types of which to take a snapshot for. For example: \&quot;google.compute.Disk\&quot;. If specified, only matching assets will be returned. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview) for all supported asset types. | [optional] 
**content_type** | **str** | Asset content type. If not specified, no content but the asset name will be returned. | [optional] 
**output_config** | [**OutputConfig**](OutputConfig.md) |  | [optional] 
**read_time** | **str** | Timestamp to take an asset snapshot. This can only be set to a timestamp between 2018-10-02 UTC (inclusive) and the current time. If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results. | [optional] 

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


