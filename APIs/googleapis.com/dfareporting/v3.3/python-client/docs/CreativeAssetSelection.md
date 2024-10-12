# CreativeAssetSelection

Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_asset_id** | **str** | A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field. | [optional] 
**rules** | [**List[Rule]**](Rule.md) | Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives. | [optional] 

## Example

```python
from openapi_client.models.creative_asset_selection import CreativeAssetSelection

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeAssetSelection from a JSON string
creative_asset_selection_instance = CreativeAssetSelection.from_json(json)
# print the JSON string representation of the object
print(CreativeAssetSelection.to_json())

# convert the object into a dict
creative_asset_selection_dict = creative_asset_selection_instance.to_dict()
# create an instance of CreativeAssetSelection from a dict
creative_asset_selection_from_dict = CreativeAssetSelection.from_dict(creative_asset_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


