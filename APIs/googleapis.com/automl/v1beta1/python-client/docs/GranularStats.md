# GranularStats

Stats split by a defined in context granularity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | **Dict[str, str]** | A map from granularity key to example count for that key. E.g. for hour_of_day &#x60;13&#x60; means 1pm, or for month_of_year &#x60;5&#x60; means May). | [optional] 

## Example

```python
from openapi_client.models.granular_stats import GranularStats

# TODO update the JSON string below
json = "{}"
# create an instance of GranularStats from a JSON string
granular_stats_instance = GranularStats.from_json(json)
# print the JSON string representation of the object
print(GranularStats.to_json())

# convert the object into a dict
granular_stats_dict = granular_stats_instance.to_dict()
# create an instance of GranularStats from a dict
granular_stats_from_dict = GranularStats.from_dict(granular_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


