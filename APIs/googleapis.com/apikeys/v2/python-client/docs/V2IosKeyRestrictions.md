# V2IosKeyRestrictions

The iOS apps that are allowed to use the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_bundle_ids** | **List[str]** | A list of bundle IDs that are allowed when making API calls with this key. | [optional] 

## Example

```python
from openapi_client.models.v2_ios_key_restrictions import V2IosKeyRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of V2IosKeyRestrictions from a JSON string
v2_ios_key_restrictions_instance = V2IosKeyRestrictions.from_json(json)
# print the JSON string representation of the object
print(V2IosKeyRestrictions.to_json())

# convert the object into a dict
v2_ios_key_restrictions_dict = v2_ios_key_restrictions_instance.to_dict()
# create an instance of V2IosKeyRestrictions from a dict
v2_ios_key_restrictions_from_dict = V2IosKeyRestrictions.from_dict(v2_ios_key_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


