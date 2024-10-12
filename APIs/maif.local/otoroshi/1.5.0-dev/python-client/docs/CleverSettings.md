# CleverSettings

Configuration for CleverCloud client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_key** | **str** | CleverCloud consumer key | 
**consumer_secret** | **str** | CleverCloud consumer token | 
**orga_id** | **str** | CleverCloud organization id | 
**secret** | **str** | CleverCloud oauth secret | 
**token** | **str** | CleverCloud oauth token | 

## Example

```python
from openapi_client.models.clever_settings import CleverSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CleverSettings from a JSON string
clever_settings_instance = CleverSettings.from_json(json)
# print the JSON string representation of the object
print(CleverSettings.to_json())

# convert the object into a dict
clever_settings_dict = clever_settings_instance.to_dict()
# create an instance of CleverSettings from a dict
clever_settings_from_dict = CleverSettings.from_dict(clever_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


