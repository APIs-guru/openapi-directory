# LanguageBatchResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[DetectedLanguage]**](DetectedLanguage.md) | A list of extracted languages. | [optional] [readonly] 
**id** | **str** | Unique document identifier. | [optional] [readonly] 

## Example

```python
from openapi_client.models.language_batch_result_item import LanguageBatchResultItem

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageBatchResultItem from a JSON string
language_batch_result_item_instance = LanguageBatchResultItem.from_json(json)
# print the JSON string representation of the object
print(LanguageBatchResultItem.to_json())

# convert the object into a dict
language_batch_result_item_dict = language_batch_result_item_instance.to_dict()
# create an instance of LanguageBatchResultItem from a dict
language_batch_result_item_from_dict = LanguageBatchResultItem.from_dict(language_batch_result_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


