# AppMediaAssetState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[AppMediaStateError]**](AppMediaStateError.md) |  | [optional] 
**state** | **str** |  | [optional] 
**warnings** | [**List[AppMediaStateError]**](AppMediaStateError.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_media_asset_state import AppMediaAssetState

# TODO update the JSON string below
json = "{}"
# create an instance of AppMediaAssetState from a JSON string
app_media_asset_state_instance = AppMediaAssetState.from_json(json)
# print the JSON string representation of the object
print(AppMediaAssetState.to_json())

# convert the object into a dict
app_media_asset_state_dict = app_media_asset_state_instance.to_dict()
# create an instance of AppMediaAssetState from a dict
app_media_asset_state_from_dict = AppMediaAssetState.from_dict(app_media_asset_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


