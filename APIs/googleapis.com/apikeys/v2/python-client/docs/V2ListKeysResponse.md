# V2ListKeysResponse

Response message for `ListKeys` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[V2Key]**](V2Key.md) | A list of API keys. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.v2_list_keys_response import V2ListKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V2ListKeysResponse from a JSON string
v2_list_keys_response_instance = V2ListKeysResponse.from_json(json)
# print the JSON string representation of the object
print(V2ListKeysResponse.to_json())

# convert the object into a dict
v2_list_keys_response_dict = v2_list_keys_response_instance.to_dict()
# create an instance of V2ListKeysResponse from a dict
v2_list_keys_response_from_dict = V2ListKeysResponse.from_dict(v2_list_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


