# WannabeAddonProviderAPI


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_vars** | **List[str]** |  | 
**password** | **str** |  | 
**production** | [**WannabeAddonProviderAPIUrl**](WannabeAddonProviderAPIUrl.md) |  | [optional] 
**regions** | **List[str]** |  | [optional] 
**sso_salt** | **str** |  | 
**test** | [**WannabeAddonProviderAPIUrl**](WannabeAddonProviderAPIUrl.md) |  | [optional] 

## Example

```python
from openapi_client.models.wannabe_addon_provider_api import WannabeAddonProviderAPI

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeAddonProviderAPI from a JSON string
wannabe_addon_provider_api_instance = WannabeAddonProviderAPI.from_json(json)
# print the JSON string representation of the object
print(WannabeAddonProviderAPI.to_json())

# convert the object into a dict
wannabe_addon_provider_api_dict = wannabe_addon_provider_api_instance.to_dict()
# create an instance of WannabeAddonProviderAPI from a dict
wannabe_addon_provider_api_from_dict = WannabeAddonProviderAPI.from_dict(wannabe_addon_provider_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


