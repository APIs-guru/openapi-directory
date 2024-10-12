# AssetDiscoveryConfig

The configuration used for Asset Discovery runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inclusion_mode** | **str** | The mode to use for filtering asset discovery. | [optional] 
**project_ids** | **List[str]** | The project ids to use for filtering asset discovery. | [optional] 

## Example

```python
from openapi_client.models.asset_discovery_config import AssetDiscoveryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AssetDiscoveryConfig from a JSON string
asset_discovery_config_instance = AssetDiscoveryConfig.from_json(json)
# print the JSON string representation of the object
print(AssetDiscoveryConfig.to_json())

# convert the object into a dict
asset_discovery_config_dict = asset_discovery_config_instance.to_dict()
# create an instance of AssetDiscoveryConfig from a dict
asset_discovery_config_from_dict = AssetDiscoveryConfig.from_dict(asset_discovery_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


