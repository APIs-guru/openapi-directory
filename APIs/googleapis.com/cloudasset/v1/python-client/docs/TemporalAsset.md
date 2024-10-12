# TemporalAsset

An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**Asset**](Asset.md) |  | [optional] 
**deleted** | **bool** | Whether the asset has been deleted or not. | [optional] 
**prior_asset** | [**Asset**](Asset.md) |  | [optional] 
**prior_asset_state** | **str** | State of prior_asset. | [optional] 
**window** | [**TimeWindow**](TimeWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.temporal_asset import TemporalAsset

# TODO update the JSON string below
json = "{}"
# create an instance of TemporalAsset from a JSON string
temporal_asset_instance = TemporalAsset.from_json(json)
# print the JSON string representation of the object
print(TemporalAsset.to_json())

# convert the object into a dict
temporal_asset_dict = temporal_asset_instance.to_dict()
# create an instance of TemporalAsset from a dict
temporal_asset_from_dict = TemporalAsset.from_dict(temporal_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


