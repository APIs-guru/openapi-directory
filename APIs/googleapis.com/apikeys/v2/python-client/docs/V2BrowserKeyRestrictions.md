# V2BrowserKeyRestrictions

The HTTP referrers (websites) that are allowed to use the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_referrers** | **List[str]** | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. | [optional] 

## Example

```python
from openapi_client.models.v2_browser_key_restrictions import V2BrowserKeyRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of V2BrowserKeyRestrictions from a JSON string
v2_browser_key_restrictions_instance = V2BrowserKeyRestrictions.from_json(json)
# print the JSON string representation of the object
print(V2BrowserKeyRestrictions.to_json())

# convert the object into a dict
v2_browser_key_restrictions_dict = v2_browser_key_restrictions_instance.to_dict()
# create an instance of V2BrowserKeyRestrictions from a dict
v2_browser_key_restrictions_from_dict = V2BrowserKeyRestrictions.from_dict(v2_browser_key_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


