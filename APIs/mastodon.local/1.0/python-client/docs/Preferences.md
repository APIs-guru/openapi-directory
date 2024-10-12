# Preferences

Represents a user's preferences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postingdefaultlanguage** | **str** | Default language for new posts. Equivalent to [Source#language](https://docs.joinmastodon.org/entities/source/#language). ISO 639-1 language two-letter code, or null | [optional] 
**postingdefaultsensitive** | **bool** | Default sensitivity flag for new posts. Equivalent to [Source#sensitive](https://docs.joinmastodon.org/entities/source/#sensitive). | [optional] 
**postingdefaultvisibility** | **str** | Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy). | [optional] 
**readingexpandmedia** | **str** | Whether media attachments should be automatically displayed or blurred/hidden. | [optional] 
**readingexpandspoilers** | **bool** | Whether CWs should be expanded by default. | [optional] 

## Example

```python
from openapi_client.models.preferences import Preferences

# TODO update the JSON string below
json = "{}"
# create an instance of Preferences from a JSON string
preferences_instance = Preferences.from_json(json)
# print the JSON string representation of the object
print(Preferences.to_json())

# convert the object into a dict
preferences_dict = preferences_instance.to_dict()
# create an instance of Preferences from a dict
preferences_from_dict = Preferences.from_dict(preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


