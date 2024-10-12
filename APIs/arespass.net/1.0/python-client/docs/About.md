# About

**This API version number**. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_release_date_iso8601** | **str** | **The release date of this API, ISO 8601 format.**  | [optional] 
**api_version** | [**AboutApiVersion**](AboutApiVersion.md) |  | [optional] 
**available_languages_iso639_1** | **str** | **The list of available languages.**  Each language is identified by its ISO 639-1, two-letter code.  The list elements are comma-separated and sorted in ascending order.  | [optional] 

## Example

```python
from openapi_client.models.about import About

# TODO update the JSON string below
json = "{}"
# create an instance of About from a JSON string
about_instance = About.from_json(json)
# print the JSON string representation of the object
print(About.to_json())

# convert the object into a dict
about_dict = about_instance.to_dict()
# create an instance of About from a dict
about_from_dict = About.from_dict(about_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


