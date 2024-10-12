# TopDirectionSources

Top regions where driving-direction requests originated from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_count** | **int** | The number of days data is aggregated over. | [optional] 
**region_counts** | [**List[RegionCount]**](RegionCount.md) | Regions sorted in descending order by count. | [optional] 

## Example

```python
from openapi_client.models.top_direction_sources import TopDirectionSources

# TODO update the JSON string below
json = "{}"
# create an instance of TopDirectionSources from a JSON string
top_direction_sources_instance = TopDirectionSources.from_json(json)
# print the JSON string representation of the object
print(TopDirectionSources.to_json())

# convert the object into a dict
top_direction_sources_dict = top_direction_sources_instance.to_dict()
# create an instance of TopDirectionSources from a dict
top_direction_sources_from_dict = TopDirectionSources.from_dict(top_direction_sources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


