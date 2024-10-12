# UrlRedirectActionParameters

Defines the parameters for the url redirect action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**custom_fragment** | **str** | Fragment to add to the redirect URL. Fragment is the part of the URL that comes after #. Do not include the #. | [optional] 
**custom_hostname** | **str** | Host to redirect. Leave empty to use the incoming host as the destination host. | [optional] 
**custom_path** | **str** | The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path. | [optional] 
**custom_query_string** | **str** | The set of query strings to be placed in the redirect URL. Setting this value would replace any existing query string; leave empty to preserve the incoming query string. Query string must be in &lt;key&gt;&#x3D;&lt;value&gt; format. ? and &amp; will be added automatically so do not include them. | [optional] 
**destination_protocol** | **str** | Protocol to use for the redirect. The default value is MatchRequest | [optional] 
**redirect_type** | **str** | The redirect type the rule will use when redirecting traffic. | 

## Example

```python
from openapi_client.models.url_redirect_action_parameters import UrlRedirectActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UrlRedirectActionParameters from a JSON string
url_redirect_action_parameters_instance = UrlRedirectActionParameters.from_json(json)
# print the JSON string representation of the object
print(UrlRedirectActionParameters.to_json())

# convert the object into a dict
url_redirect_action_parameters_dict = url_redirect_action_parameters_instance.to_dict()
# create an instance of UrlRedirectActionParameters from a dict
url_redirect_action_parameters_from_dict = UrlRedirectActionParameters.from_dict(url_redirect_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


