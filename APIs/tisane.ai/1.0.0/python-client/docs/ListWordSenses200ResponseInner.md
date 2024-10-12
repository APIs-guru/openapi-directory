# ListWordSenses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**families** | [**List[ListWordSenses200ResponseInnerFamiliesInner]**](ListWordSenses200ResponseInnerFamiliesInner.md) |  | [optional] 
**features** | [**List[ListWordSenses200ResponseInnerFeaturesInner]**](ListWordSenses200ResponseInnerFeaturesInner.md) |  | [optional] 
**frequency** | **float** |  | [optional] 
**is_lemma** | **bool** |  | [optional] 
**legacy_map_id** | **float** |  | [optional] 
**lemma** | **str** |  | [optional] 
**lexeme_id** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.list_word_senses200_response_inner import ListWordSenses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListWordSenses200ResponseInner from a JSON string
list_word_senses200_response_inner_instance = ListWordSenses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ListWordSenses200ResponseInner.to_json())

# convert the object into a dict
list_word_senses200_response_inner_dict = list_word_senses200_response_inner_instance.to_dict()
# create an instance of ListWordSenses200ResponseInner from a dict
list_word_senses200_response_inner_from_dict = ListWordSenses200ResponseInner.from_dict(list_word_senses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


