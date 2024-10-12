# GetLocalesCode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Locale code | 
**enabled** | **bool** | Whether the locale is enabled | [optional] [default to False]

## Example

```python
from openapi_client.models.get_locales_code200_response import GetLocalesCode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetLocalesCode200Response from a JSON string
get_locales_code200_response_instance = GetLocalesCode200Response.from_json(json)
# print the JSON string representation of the object
print(GetLocalesCode200Response.to_json())

# convert the object into a dict
get_locales_code200_response_dict = get_locales_code200_response_instance.to_dict()
# create an instance of GetLocalesCode200Response from a dict
get_locales_code200_response_from_dict = GetLocalesCode200Response.from_dict(get_locales_code200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


