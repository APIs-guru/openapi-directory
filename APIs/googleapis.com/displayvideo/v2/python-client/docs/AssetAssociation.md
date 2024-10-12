# AssetAssociation

Asset association for the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**Asset**](Asset.md) |  | [optional] 
**role** | **str** | The role of this asset for the creative. | [optional] 

## Example

```python
from openapi_client.models.asset_association import AssetAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of AssetAssociation from a JSON string
asset_association_instance = AssetAssociation.from_json(json)
# print the JSON string representation of the object
print(AssetAssociation.to_json())

# convert the object into a dict
asset_association_dict = asset_association_instance.to_dict()
# create an instance of AssetAssociation from a dict
asset_association_from_dict = AssetAssociation.from_dict(asset_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


