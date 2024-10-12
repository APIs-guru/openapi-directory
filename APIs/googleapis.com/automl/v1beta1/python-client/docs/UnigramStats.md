# UnigramStats

The statistics of a unigram.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of occurrences of this unigram in the series. | [optional] 
**value** | **str** | The unigram. | [optional] 

## Example

```python
from openapi_client.models.unigram_stats import UnigramStats

# TODO update the JSON string below
json = "{}"
# create an instance of UnigramStats from a JSON string
unigram_stats_instance = UnigramStats.from_json(json)
# print the JSON string representation of the object
print(UnigramStats.to_json())

# convert the object into a dict
unigram_stats_dict = unigram_stats_instance.to_dict()
# create an instance of UnigramStats from a dict
unigram_stats_from_dict = UnigramStats.from_dict(unigram_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


