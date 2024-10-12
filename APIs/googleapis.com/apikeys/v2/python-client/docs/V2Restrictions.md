# V2Restrictions

Describes the restrictions on the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_key_restrictions** | [**V2AndroidKeyRestrictions**](V2AndroidKeyRestrictions.md) |  | [optional] 
**api_targets** | [**List[V2ApiTarget]**](V2ApiTarget.md) | A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed. | [optional] 
**browser_key_restrictions** | [**V2BrowserKeyRestrictions**](V2BrowserKeyRestrictions.md) |  | [optional] 
**ios_key_restrictions** | [**V2IosKeyRestrictions**](V2IosKeyRestrictions.md) |  | [optional] 
**server_key_restrictions** | [**V2ServerKeyRestrictions**](V2ServerKeyRestrictions.md) |  | [optional] 

## Example

```python
from openapi_client.models.v2_restrictions import V2Restrictions

# TODO update the JSON string below
json = "{}"
# create an instance of V2Restrictions from a JSON string
v2_restrictions_instance = V2Restrictions.from_json(json)
# print the JSON string representation of the object
print(V2Restrictions.to_json())

# convert the object into a dict
v2_restrictions_dict = v2_restrictions_instance.to_dict()
# create an instance of V2Restrictions from a dict
v2_restrictions_from_dict = V2Restrictions.from_dict(v2_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


