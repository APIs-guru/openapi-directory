# RelatedAssets

DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[RelatedAsset]**](RelatedAsset.md) | The peer resources of the relationship. | [optional] 
**relationship_attributes** | [**RelationshipAttributes**](RelationshipAttributes.md) |  | [optional] 

## Example

```python
from openapi_client.models.related_assets import RelatedAssets

# TODO update the JSON string below
json = "{}"
# create an instance of RelatedAssets from a JSON string
related_assets_instance = RelatedAssets.from_json(json)
# print the JSON string representation of the object
print(RelatedAssets.to_json())

# convert the object into a dict
related_assets_dict = related_assets_instance.to_dict()
# create an instance of RelatedAssets from a dict
related_assets_from_dict = RelatedAssets.from_dict(related_assets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


