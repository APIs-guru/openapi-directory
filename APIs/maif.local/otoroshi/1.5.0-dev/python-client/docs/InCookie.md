# InCookie

JWT location in a cookie

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the cookie | 
**type** | **str** | String with value InCookie | 

## Example

```python
from openapi_client.models.in_cookie import InCookie

# TODO update the JSON string below
json = "{}"
# create an instance of InCookie from a JSON string
in_cookie_instance = InCookie.from_json(json)
# print the JSON string representation of the object
print(InCookie.to_json())

# convert the object into a dict
in_cookie_dict = in_cookie_instance.to_dict()
# create an instance of InCookie from a dict
in_cookie_from_dict = InCookie.from_dict(in_cookie_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


