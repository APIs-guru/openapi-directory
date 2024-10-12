# V2LookupKeyResponse

Response message for `LookupKey` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name of the API key. If the API key has been purged, resource name is empty. | [optional] 
**parent** | **str** | The project that owns the key with the value specified in the request. | [optional] 

## Example

```python
from openapi_client.models.v2_lookup_key_response import V2LookupKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2LookupKeyResponse from a JSON string
v2_lookup_key_response_instance = V2LookupKeyResponse.from_json(json)
# print the JSON string representation of the object
print(V2LookupKeyResponse.to_json())

# convert the object into a dict
v2_lookup_key_response_dict = v2_lookup_key_response_instance.to_dict()
# create an instance of V2LookupKeyResponse from a dict
v2_lookup_key_response_from_dict = V2LookupKeyResponse.from_dict(v2_lookup_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


