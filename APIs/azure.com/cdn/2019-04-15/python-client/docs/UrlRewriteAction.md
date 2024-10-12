# UrlRewriteAction

Defines the url rewrite action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**UrlRewriteActionParameters**](UrlRewriteActionParameters.md) |  | 

## Example

```python
from openapi_client.models.url_rewrite_action import UrlRewriteAction

# TODO update the JSON string below
json = "{}"
# create an instance of UrlRewriteAction from a JSON string
url_rewrite_action_instance = UrlRewriteAction.from_json(json)
# print the JSON string representation of the object
print(UrlRewriteAction.to_json())

# convert the object into a dict
url_rewrite_action_dict = url_rewrite_action_instance.to_dict()
# create an instance of UrlRewriteAction from a dict
url_rewrite_action_from_dict = UrlRewriteAction.from_dict(url_rewrite_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


