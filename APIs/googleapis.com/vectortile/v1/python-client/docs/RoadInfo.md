# RoadInfo

Extra metadata relating to roads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_private** | **bool** | Road has signage discouraging or prohibiting use by the general public. E.g., roads with signs that say \&quot;Private\&quot;, or \&quot;No trespassing.\&quot; | [optional] 

## Example

```python
from openapi_client.models.road_info import RoadInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RoadInfo from a JSON string
road_info_instance = RoadInfo.from_json(json)
# print the JSON string representation of the object
print(RoadInfo.to_json())

# convert the object into a dict
road_info_dict = road_info_instance.to_dict()
# create an instance of RoadInfo from a dict
road_info_from_dict = RoadInfo.from_dict(road_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


