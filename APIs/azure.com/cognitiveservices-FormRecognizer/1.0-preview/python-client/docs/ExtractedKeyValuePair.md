# ExtractedKeyValuePair

Representation of a key-value pair as a list  of key and value tokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**List[ExtractedToken]**](ExtractedToken.md) | List of tokens for the extracted key in a key-value pair. | [optional] 
**value** | [**List[ExtractedToken]**](ExtractedToken.md) | List of tokens for the extracted value in a key-value pair. | [optional] 

## Example

```python
from openapi_client.models.extracted_key_value_pair import ExtractedKeyValuePair

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractedKeyValuePair from a JSON string
extracted_key_value_pair_instance = ExtractedKeyValuePair.from_json(json)
# print the JSON string representation of the object
print(ExtractedKeyValuePair.to_json())

# convert the object into a dict
extracted_key_value_pair_dict = extracted_key_value_pair_instance.to_dict()
# create an instance of ExtractedKeyValuePair from a dict
extracted_key_value_pair_from_dict = ExtractedKeyValuePair.from_dict(extracted_key_value_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


