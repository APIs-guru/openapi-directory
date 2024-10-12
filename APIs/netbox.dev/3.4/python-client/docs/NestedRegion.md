# NestedRegion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**site_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_region import NestedRegion

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRegion from a JSON string
nested_region_instance = NestedRegion.from_json(json)
# print the JSON string representation of the object
print(NestedRegion.to_json())

# convert the object into a dict
nested_region_dict = nested_region_instance.to_dict()
# create an instance of NestedRegion from a dict
nested_region_from_dict = NestedRegion.from_dict(nested_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


