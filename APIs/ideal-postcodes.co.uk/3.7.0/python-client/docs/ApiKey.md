# ApiKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | Determines whether the key can be used by the requesting agent.   Returns false if one of the following conditions are met:   - Key has no lookups remaining   - Daily limit has been reached on the key   - Daily individual limit has been reached   - Key is not being used via an authorised URL   - (Sublicensed key only) Key has a valid licensee attached   - (Sublicensed key only) Key is not being used via an authorised URL specified by licensee  | 
**context** | [**ApiKeyContext**](ApiKeyContext.md) |  | 
**contexts** | [**List[AvailableContextsInner]**](AvailableContextsInner.md) | A list of available contexts for a key | 

## Example

```python
from openapi_client.models.api_key import ApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKey from a JSON string
api_key_instance = ApiKey.from_json(json)
# print the JSON string representation of the object
print(ApiKey.to_json())

# convert the object into a dict
api_key_dict = api_key_instance.to_dict()
# create an instance of ApiKey from a dict
api_key_from_dict = ApiKey.from_dict(api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


