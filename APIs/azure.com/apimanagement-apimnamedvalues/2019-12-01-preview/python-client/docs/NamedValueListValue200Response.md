# NamedValueListValue200Response

Client or app secret used in IdentityProviders, Aad, OpenID or OAuth.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | This is secret value of the NamedValue entity. | [optional] 

## Example

```python
from openapi_client.models.named_value_list_value200_response import NamedValueListValue200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueListValue200Response from a JSON string
named_value_list_value200_response_instance = NamedValueListValue200Response.from_json(json)
# print the JSON string representation of the object
print(NamedValueListValue200Response.to_json())

# convert the object into a dict
named_value_list_value200_response_dict = named_value_list_value200_response_instance.to_dict()
# create an instance of NamedValueListValue200Response from a dict
named_value_list_value200_response_from_dict = NamedValueListValue200Response.from_dict(named_value_list_value200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


