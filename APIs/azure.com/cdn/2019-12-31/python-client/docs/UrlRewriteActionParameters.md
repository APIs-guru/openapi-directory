# UrlRewriteActionParameters

Defines the parameters for the url rewrite action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**destination** | **str** | Define the relative URL to which the above requests will be rewritten by. | 
**preserve_unmatched_path** | **bool** | Whether to preserve unmatched path. Default value is true. | [optional] 
**source_pattern** | **str** | define a request URI pattern that identifies the type of requests that may be rewritten. If value is blank, all strings are matched. | 

## Example

```python
from openapi_client.models.url_rewrite_action_parameters import UrlRewriteActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UrlRewriteActionParameters from a JSON string
url_rewrite_action_parameters_instance = UrlRewriteActionParameters.from_json(json)
# print the JSON string representation of the object
print(UrlRewriteActionParameters.to_json())

# convert the object into a dict
url_rewrite_action_parameters_dict = url_rewrite_action_parameters_instance.to_dict()
# create an instance of UrlRewriteActionParameters from a dict
url_rewrite_action_parameters_from_dict = UrlRewriteActionParameters.from_dict(url_rewrite_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


