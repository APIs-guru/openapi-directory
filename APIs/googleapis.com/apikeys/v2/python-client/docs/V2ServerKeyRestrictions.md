# V2ServerKeyRestrictions

The IP addresses of callers that are allowed to use the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ips** | **List[str]** | A list of the caller IP addresses that are allowed to make API calls with this key. | [optional] 

## Example

```python
from openapi_client.models.v2_server_key_restrictions import V2ServerKeyRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of V2ServerKeyRestrictions from a JSON string
v2_server_key_restrictions_instance = V2ServerKeyRestrictions.from_json(json)
# print the JSON string representation of the object
print(V2ServerKeyRestrictions.to_json())

# convert the object into a dict
v2_server_key_restrictions_dict = v2_server_key_restrictions_instance.to_dict()
# create an instance of V2ServerKeyRestrictions from a dict
v2_server_key_restrictions_from_dict = V2ServerKeyRestrictions.from_dict(v2_server_key_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


