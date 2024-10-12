# Rewrite

A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_links** | **bool** | The request will be forwarded to Firebase Dynamic Links. | [optional] 
**function** | **str** | The function to proxy requests to. Must match the exported function name exactly. | [optional] 
**function_region** | **str** | Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1. | [optional] 
**glob** | **str** | The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. | [optional] 
**path** | **str** | The URL path to rewrite the request to. | [optional] 
**regex** | **str** | The user-supplied RE2 regular expression to match against the request URL path. | [optional] 
**run** | [**CloudRunRewrite**](CloudRunRewrite.md) |  | [optional] 

## Example

```python
from openapi_client.models.rewrite import Rewrite

# TODO update the JSON string below
json = "{}"
# create an instance of Rewrite from a JSON string
rewrite_instance = Rewrite.from_json(json)
# print the JSON string representation of the object
print(Rewrite.to_json())

# convert the object into a dict
rewrite_dict = rewrite_instance.to_dict()
# create an instance of Rewrite from a dict
rewrite_from_dict = Rewrite.from_dict(rewrite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


