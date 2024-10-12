# ApiKeys


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apikeys** | [**List[ApiKey]**](ApiKey.md) | Array of apikeys | 

## Example

```python
from openapi_client.models.api_keys import ApiKeys

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeys from a JSON string
api_keys_instance = ApiKeys.from_json(json)
# print the JSON string representation of the object
print(ApiKeys.to_json())

# convert the object into a dict
api_keys_dict = api_keys_instance.to_dict()
# create an instance of ApiKeys from a dict
api_keys_from_dict = ApiKeys.from_dict(api_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


