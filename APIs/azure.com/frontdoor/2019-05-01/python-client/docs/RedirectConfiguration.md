# RedirectConfiguration

Describes Redirect Route.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_fragment** | **str** | Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #. | [optional] 
**custom_host** | **str** | Host to redirect. Leave empty to use the incoming host as the destination host. | [optional] 
**custom_path** | **str** | The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path. | [optional] 
**custom_query_string** | **str** | The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in &lt;key&gt;&#x3D;&lt;value&gt; format. The first ? and &amp; will be added automatically so do not include them in the front, but do separate multiple query strings with &amp;. | [optional] 
**redirect_protocol** | **str** | The protocol of the destination to where the traffic is redirected | [optional] 
**redirect_type** | **str** | The redirect type the rule will use when redirecting traffic. | [optional] 

## Example

```python
from openapi_client.models.redirect_configuration import RedirectConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RedirectConfiguration from a JSON string
redirect_configuration_instance = RedirectConfiguration.from_json(json)
# print the JSON string representation of the object
print(RedirectConfiguration.to_json())

# convert the object into a dict
redirect_configuration_dict = redirect_configuration_instance.to_dict()
# create an instance of RedirectConfiguration from a dict
redirect_configuration_from_dict = RedirectConfiguration.from_dict(redirect_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


