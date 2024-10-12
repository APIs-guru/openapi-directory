# DetailedOrderingLevelInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[DetailedOrderingLevelInfoResultInner]**](DetailedOrderingLevelInfoResultInner.md) |  | [optional] 
**status** | **str** |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.detailed_ordering_level_info import DetailedOrderingLevelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DetailedOrderingLevelInfo from a JSON string
detailed_ordering_level_info_instance = DetailedOrderingLevelInfo.from_json(json)
# print the JSON string representation of the object
print(DetailedOrderingLevelInfo.to_json())

# convert the object into a dict
detailed_ordering_level_info_dict = detailed_ordering_level_info_instance.to_dict()
# create an instance of DetailedOrderingLevelInfo from a dict
detailed_ordering_level_info_from_dict = DetailedOrderingLevelInfo.from_dict(detailed_ordering_level_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


