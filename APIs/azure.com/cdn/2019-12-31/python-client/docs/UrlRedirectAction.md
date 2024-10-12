# UrlRedirectAction

Defines the url redirect action for the delivery rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**UrlRedirectActionParameters**](UrlRedirectActionParameters.md) |  | 

## Example

```python
from openapi_client.models.url_redirect_action import UrlRedirectAction

# TODO update the JSON string below
json = "{}"
# create an instance of UrlRedirectAction from a JSON string
url_redirect_action_instance = UrlRedirectAction.from_json(json)
# print the JSON string representation of the object
print(UrlRedirectAction.to_json())

# convert the object into a dict
url_redirect_action_dict = url_redirect_action_instance.to_dict()
# create an instance of UrlRedirectAction from a dict
url_redirect_action_from_dict = UrlRedirectAction.from_dict(url_redirect_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


