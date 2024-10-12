# PopularityItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Color depending upon left and right analysis numbers | [optional] 
**delta_percent** | **float** | Delta percent | [optional] 
**difference** | **float** | Difference depending upon left and right analysis | [optional] 
**left** | **float** | Left side rating for above description (2016 ford F-150 Lariat) | [optional] 
**right** | **float** | Right side rating for above description (All Other Cars) | [optional] 
**text** | **str** | Description for which popularity should be show eg: 2016 ford F-150 Lariat vs All Other Cars | [optional] 
**thumbs** | **str** | Thumbs up/down depending upon left and right analysis numbers | [optional] 

## Example

```python
from openapi_client.models.popularity_item import PopularityItem

# TODO update the JSON string below
json = "{}"
# create an instance of PopularityItem from a JSON string
popularity_item_instance = PopularityItem.from_json(json)
# print the JSON string representation of the object
print(PopularityItem.to_json())

# convert the object into a dict
popularity_item_dict = popularity_item_instance.to_dict()
# create an instance of PopularityItem from a dict
popularity_item_from_dict = PopularityItem.from_dict(popularity_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


