# AssetItem

Information about an asset associated with the web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Asset&#39;s Id. | [optional] 
**input_ports** | [**Dict[str, InputPort]**](InputPort.md) | Information about the asset&#39;s input ports. | [optional] 
**location_info** | [**BlobLocation**](BlobLocation.md) |  | 
**metadata** | **Dict[str, str]** | If the asset is a custom module, this holds the module&#39;s metadata. | [optional] 
**name** | **str** | Asset&#39;s friendly name. | 
**output_ports** | [**Dict[str, OutputPort]**](OutputPort.md) | Information about the asset&#39;s output ports. | [optional] 
**parameters** | [**List[ModuleAssetParameter]**](ModuleAssetParameter.md) | If the asset is a custom module, this holds the module&#39;s parameters. | [optional] 
**type** | **str** | Asset&#39;s type. | 

## Example

```python
from openapi_client.models.asset_item import AssetItem

# TODO update the JSON string below
json = "{}"
# create an instance of AssetItem from a JSON string
asset_item_instance = AssetItem.from_json(json)
# print the JSON string representation of the object
print(AssetItem.to_json())

# convert the object into a dict
asset_item_dict = asset_item_instance.to_dict()
# create an instance of AssetItem from a dict
asset_item_from_dict = AssetItem.from_dict(asset_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


