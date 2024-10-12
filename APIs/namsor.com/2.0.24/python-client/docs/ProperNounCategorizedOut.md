# ProperNounCategorizedOut

Classified typed proper names

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_type** | **str** | The most likely common name type | [optional] 
**common_type_alt** | **str** | Best alternative for : The most likely common name type | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | The input name | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.proper_noun_categorized_out import ProperNounCategorizedOut

# TODO update the JSON string below
json = "{}"
# create an instance of ProperNounCategorizedOut from a JSON string
proper_noun_categorized_out_instance = ProperNounCategorizedOut.from_json(json)
# print the JSON string representation of the object
print(ProperNounCategorizedOut.to_json())

# convert the object into a dict
proper_noun_categorized_out_dict = proper_noun_categorized_out_instance.to_dict()
# create an instance of ProperNounCategorizedOut from a dict
proper_noun_categorized_out_from_dict = ProperNounCategorizedOut.from_dict(proper_noun_categorized_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


