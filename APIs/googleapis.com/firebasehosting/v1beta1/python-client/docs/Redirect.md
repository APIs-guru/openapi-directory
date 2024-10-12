# Redirect

A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glob** | **str** | The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. | [optional] 
**location** | **str** | Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a &#x60;:&#x60; prefix to identify the segment and an optional &#x60;*&#x60; to capture the rest of the URL. For example: \&quot;glob\&quot;: \&quot;/:capture*\&quot;, \&quot;statusCode\&quot;: 301, \&quot;location\&quot;: \&quot;https://example.com/foo/:capture\&quot; | [optional] 
**regex** | **str** | The user-supplied RE2 regular expression to match against the request URL path. | [optional] 
**status_code** | **int** | Required. The status HTTP code to return in the response. It must be a valid 3xx status code. | [optional] 

## Example

```python
from openapi_client.models.redirect import Redirect

# TODO update the JSON string below
json = "{}"
# create an instance of Redirect from a JSON string
redirect_instance = Redirect.from_json(json)
# print the JSON string representation of the object
print(Redirect.to_json())

# convert the object into a dict
redirect_dict = redirect_instance.to_dict()
# create an instance of Redirect from a dict
redirect_from_dict = Redirect.from_dict(redirect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


