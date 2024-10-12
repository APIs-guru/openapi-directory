# Site

A single site. Sites are apps or websites belonging to a channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The resource name of the site. | [optional] [readonly] 
**url_or_app_id** | **str** | Required. The app ID or URL of the site. Must be UTF-8 encoded with a maximum length of 240 bytes. | [optional] 

## Example

```python
from openapi_client.models.site import Site

# TODO update the JSON string below
json = "{}"
# create an instance of Site from a JSON string
site_instance = Site.from_json(json)
# print the JSON string representation of the object
print(Site.to_json())

# convert the object into a dict
site_dict = site_instance.to_dict()
# create an instance of Site from a dict
site_from_dict = Site.from_dict(site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


