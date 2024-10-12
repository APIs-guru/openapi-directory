# UrlDispatchRule

Rules to match an HTTP request and dispatch that request to a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Domain name to match against. The wildcard \&quot;*\&quot; is supported if specified before a period: \&quot;*.\&quot;.Defaults to matching all domains: \&quot;*\&quot;. | [optional] 
**path** | **str** | Pathname within the host. Must start with a \&quot;/\&quot;. A single \&quot;*\&quot; can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters. | [optional] 
**service** | **str** | Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default. | [optional] 

## Example

```python
from openapi_client.models.url_dispatch_rule import UrlDispatchRule

# TODO update the JSON string below
json = "{}"
# create an instance of UrlDispatchRule from a JSON string
url_dispatch_rule_instance = UrlDispatchRule.from_json(json)
# print the JSON string representation of the object
print(UrlDispatchRule.to_json())

# convert the object into a dict
url_dispatch_rule_dict = url_dispatch_rule_instance.to_dict()
# create an instance of UrlDispatchRule from a dict
url_dispatch_rule_from_dict = UrlDispatchRule.from_dict(url_dispatch_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


