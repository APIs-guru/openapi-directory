# Asset

Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_name** | **str** | The author&#39;s publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing). | [optional] 
**create_time** | **str** | For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created. | [optional] 
**description** | **str** | The human-readable description, set by the asset&#39;s author. | [optional] 
**display_name** | **str** | The human-readable name, set by the asset&#39;s author. | [optional] 
**formats** | [**List[Format]**](Format.md) | A list of Formats where each format describes one representation of the asset. | [optional] 
**is_curated** | **bool** | Whether this asset has been curated by the Poly team. | [optional] 
**license** | **str** | The license under which the author has made the asset available for use, if any. | [optional] 
**metadata** | **str** | Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user&#39;s own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON). | [optional] 
**name** | **str** | The unique identifier for the asset in the form: &#x60;assets/{ASSET_ID}&#x60;. | [optional] 
**presentation_params** | [**PresentationParams**](PresentationParams.md) |  | [optional] 
**remix_info** | [**RemixInfo**](RemixInfo.md) |  | [optional] 
**thumbnail** | [**File**](File.md) |  | [optional] 
**update_time** | **str** | The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated. | [optional] 
**visibility** | **str** | The visibility of the asset and who can access it. | [optional] 

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


