# BatchProperNounCategorizedOut

Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proper_nouns** | [**List[ProperNounCategorizedOut]**](ProperNounCategorizedOut.md) | Classified typed proper names | [optional] 

## Example

```python
from openapi_client.models.batch_proper_noun_categorized_out import BatchProperNounCategorizedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchProperNounCategorizedOut from a JSON string
batch_proper_noun_categorized_out_instance = BatchProperNounCategorizedOut.from_json(json)
# print the JSON string representation of the object
print(BatchProperNounCategorizedOut.to_json())

# convert the object into a dict
batch_proper_noun_categorized_out_dict = batch_proper_noun_categorized_out_instance.to_dict()
# create an instance of BatchProperNounCategorizedOut from a dict
batch_proper_noun_categorized_out_from_dict = BatchProperNounCategorizedOut.from_dict(batch_proper_noun_categorized_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


