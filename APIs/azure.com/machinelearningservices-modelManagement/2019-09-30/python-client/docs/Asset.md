# Asset

The Asset definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[ArtifactDetails]**](ArtifactDetails.md) | A list of child artifacts. | [optional] 
**created_time** | **datetime** | The time the Asset was created in UTC. | [optional] [readonly] 
**description** | **str** | The Asset description. | [optional] 
**id** | **str** | The Asset Id. | [optional] 
**kv_tags** | **Dict[str, str]** | The Asset tag dictionary. Tags are mutable. | [optional] 
**meta** | **Dict[str, str]** | A dictionary containing metadata about the Asset. | [optional] 
**name** | **str** | The name of the Asset. | 
**properties** | **Dict[str, str]** | The Asset property dictionary. Properties are immutable. | [optional] 
**runid** | **str** | The RunId associated with this Asset. | [optional] 

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


