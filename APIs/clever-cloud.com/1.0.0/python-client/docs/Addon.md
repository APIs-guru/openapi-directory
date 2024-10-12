# Addon

An addon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_keys** | **List[str]** | Environments variables link to the addon. | 
**creation_date** | **date** | The creation timestamp of the addon | 
**id** | **str** | &#x60;addon_${uuid}&#x60; | 
**name** | **str** |  | 
**plan** | [**Plan**](Plan.md) |  | 
**provider** | [**Provider**](Provider.md) |  | 
**real_id** | **str** | &#x60;${provider}_${uuid2}&#x60; | 
**region** | **str** |  | 

## Example

```python
from openapi_client.models.addon import Addon

# TODO update the JSON string below
json = "{}"
# create an instance of Addon from a JSON string
addon_instance = Addon.from_json(json)
# print the JSON string representation of the object
print(Addon.to_json())

# convert the object into a dict
addon_dict = addon_instance.to_dict()
# create an instance of Addon from a dict
addon_from_dict = Addon.from_dict(addon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


