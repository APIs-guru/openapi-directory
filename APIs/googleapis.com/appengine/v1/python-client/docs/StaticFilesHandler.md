# StaticFilesHandler

Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_readable** | **bool** | Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas. | [optional] 
**expiration** | **str** | Time a static file served by this handler should be cached by web proxies and browsers. | [optional] 
**http_headers** | **Dict[str, str]** | HTTP headers to use for all responses from these URLs. | [optional] 
**mime_type** | **str** | MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file&#39;s filename extension. | [optional] 
**path** | **str** | Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern. | [optional] 
**require_matching_file** | **bool** | Whether this handler should match the request if the file referenced by the handler does not exist. | [optional] 
**upload_path_regex** | **str** | Regular expression that matches the file paths for all files that should be referenced by this handler. | [optional] 

## Example

```python
from openapi_client.models.static_files_handler import StaticFilesHandler

# TODO update the JSON string below
json = "{}"
# create an instance of StaticFilesHandler from a JSON string
static_files_handler_instance = StaticFilesHandler.from_json(json)
# print the JSON string representation of the object
print(StaticFilesHandler.to_json())

# convert the object into a dict
static_files_handler_dict = static_files_handler_instance.to_dict()
# create an instance of StaticFilesHandler from a dict
static_files_handler_from_dict = StaticFilesHandler.from_dict(static_files_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


