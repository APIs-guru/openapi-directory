# MapCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | **int** |  | [optional] 
**comments** | **int** |  | [optional] 
**impressions** | **int** |  | [optional] 
**respots** | **int** |  | [optional] 
**spots** | **int** |  | [optional] 
**subscriptions** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.map_counts import MapCounts

# TODO update the JSON string below
json = "{}"
# create an instance of MapCounts from a JSON string
map_counts_instance = MapCounts.from_json(json)
# print the JSON string representation of the object
print(MapCounts.to_json())

# convert the object into a dict
map_counts_dict = map_counts_instance.to_dict()
# create an instance of MapCounts from a dict
map_counts_from_dict = MapCounts.from_dict(map_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


