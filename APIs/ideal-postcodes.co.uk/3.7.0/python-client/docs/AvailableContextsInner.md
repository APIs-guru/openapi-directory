# AvailableContextsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Country descriptor to show in Address Finder  | 
**emoji** | **str** | Emoji text icon | 
**iso_2** | **str** | 2 letter ISO code | 
**iso_3** | **str** | 3 letter ISO code | 
**rgeo** | **bool** | Indicates availability of reverse geolocation search  | 

## Example

```python
from openapi_client.models.available_contexts_inner import AvailableContextsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableContextsInner from a JSON string
available_contexts_inner_instance = AvailableContextsInner.from_json(json)
# print the JSON string representation of the object
print(AvailableContextsInner.to_json())

# convert the object into a dict
available_contexts_inner_dict = available_contexts_inner_instance.to_dict()
# create an instance of AvailableContextsInner from a dict
available_contexts_inner_from_dict = AvailableContextsInner.from_dict(available_contexts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


