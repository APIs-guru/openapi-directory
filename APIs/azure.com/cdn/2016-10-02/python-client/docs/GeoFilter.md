# GeoFilter

Rules defining user geo access within a CDN endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action of the geo filter, i.e. allow or block access. | 
**country_codes** | **List[str]** | Two letter country codes defining user country access in a geo filter, e.g. AU, MX, US. | 
**relative_path** | **str** | Relative path applicable to geo filter. (e.g. &#39;/mypictures&#39;, &#39;/mypicture/kitty.jpg&#39;, and etc.) | 

## Example

```python
from openapi_client.models.geo_filter import GeoFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GeoFilter from a JSON string
geo_filter_instance = GeoFilter.from_json(json)
# print the JSON string representation of the object
print(GeoFilter.to_json())

# convert the object into a dict
geo_filter_dict = geo_filter_instance.to_dict()
# create an instance of GeoFilter from a dict
geo_filter_from_dict = GeoFilter.from_dict(geo_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


