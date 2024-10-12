# WannabeAddonProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**WannabeAddonProviderAPI**](WannabeAddonProviderAPI.md) |  | 
**id** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.wannabe_addon_provider import WannabeAddonProvider

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeAddonProvider from a JSON string
wannabe_addon_provider_instance = WannabeAddonProvider.from_json(json)
# print the JSON string representation of the object
print(WannabeAddonProvider.to_json())

# convert the object into a dict
wannabe_addon_provider_dict = wannabe_addon_provider_instance.to_dict()
# create an instance of WannabeAddonProvider from a dict
wannabe_addon_provider_from_dict = WannabeAddonProvider.from_dict(wannabe_addon_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


