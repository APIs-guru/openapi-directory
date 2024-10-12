# V2AndroidKeyRestrictions

The Android apps that are allowed to use the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_applications** | [**List[V2AndroidApplication]**](V2AndroidApplication.md) | A list of Android applications that are allowed to make API calls with this key. | [optional] 

## Example

```python
from openapi_client.models.v2_android_key_restrictions import V2AndroidKeyRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of V2AndroidKeyRestrictions from a JSON string
v2_android_key_restrictions_instance = V2AndroidKeyRestrictions.from_json(json)
# print the JSON string representation of the object
print(V2AndroidKeyRestrictions.to_json())

# convert the object into a dict
v2_android_key_restrictions_dict = v2_android_key_restrictions_instance.to_dict()
# create an instance of V2AndroidKeyRestrictions from a dict
v2_android_key_restrictions_from_dict = V2AndroidKeyRestrictions.from_dict(v2_android_key_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


