# ServingConfig

The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_association** | **str** | How to handle well known App Association files. | [optional] 
**clean_urls** | **bool** | Defines whether to drop the file extension from uploaded files. | [optional] 
**headers** | [**List[Header]**](Header.md) | An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers. | [optional] 
**i18n** | [**I18nConfig**](I18nConfig.md) |  | [optional] 
**redirects** | [**List[Redirect]**](Redirect.md) | An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path. | [optional] 
**rewrites** | [**List[Rewrite]**](Rewrite.md) | An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL. | [optional] 
**trailing_slash_behavior** | **str** | Defines how to handle a trailing slash in the URL path. | [optional] 

## Example

```python
from openapi_client.models.serving_config import ServingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServingConfig from a JSON string
serving_config_instance = ServingConfig.from_json(json)
# print the JSON string representation of the object
print(ServingConfig.to_json())

# convert the object into a dict
serving_config_dict = serving_config_instance.to_dict()
# create an instance of ServingConfig from a dict
serving_config_from_dict = ServingConfig.from_dict(serving_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


