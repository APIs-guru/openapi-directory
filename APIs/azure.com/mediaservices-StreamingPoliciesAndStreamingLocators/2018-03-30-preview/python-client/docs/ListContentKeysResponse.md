# ListContentKeysResponse

Class of response for listContentKeys action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_keys** | [**List[StreamingLocatorContentKey]**](StreamingLocatorContentKey.md) | ContentKeys used by current Streaming Locator | [optional] 

## Example

```python
from openapi_client.models.list_content_keys_response import ListContentKeysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContentKeysResponse from a JSON string
list_content_keys_response_instance = ListContentKeysResponse.from_json(json)
# print the JSON string representation of the object
print(ListContentKeysResponse.to_json())

# convert the object into a dict
list_content_keys_response_dict = list_content_keys_response_instance.to_dict()
# create an instance of ListContentKeysResponse from a dict
list_content_keys_response_from_dict = ListContentKeysResponse.from_dict(list_content_keys_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


