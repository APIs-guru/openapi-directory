# UrlMap

URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_endpoint** | [**ApiEndpointHandler**](ApiEndpointHandler.md) |  | [optional] 
**auth_fail_action** | **str** | Action to take when users access resources that require authentication. Defaults to redirect. | [optional] 
**login** | **str** | Level of login required to access this resource. Not supported for Node.js in the App Engine standard environment. | [optional] 
**redirect_http_response_code** | **str** | 30x code to use when performing redirects for the secure field. Defaults to 302. | [optional] 
**script** | [**ScriptHandler**](ScriptHandler.md) |  | [optional] 
**security_level** | **str** | Security (HTTPS) enforcement for this URL. | [optional] 
**static_files** | [**StaticFilesHandler**](StaticFilesHandler.md) |  | [optional] 
**url_regex** | **str** | URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. | [optional] 

## Example

```python
from openapi_client.models.url_map import UrlMap

# TODO update the JSON string below
json = "{}"
# create an instance of UrlMap from a JSON string
url_map_instance = UrlMap.from_json(json)
# print the JSON string representation of the object
print(UrlMap.to_json())

# convert the object into a dict
url_map_dict = url_map_instance.to_dict()
# create an instance of UrlMap from a dict
url_map_from_dict = UrlMap.from_dict(url_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


