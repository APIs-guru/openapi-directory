# PointLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **str** |  | [optional] 
**data_server** | **str** |  | [optional] 
**end_value** | **str** |  | [optional] 
**interpolated_data** | **str** |  | [optional] 
**plot_data** | **str** |  | [optional] 
**recorded_data** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**summary_data** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.point_links import PointLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PointLinks from a JSON string
point_links_instance = PointLinks.from_json(json)
# print the JSON string representation of the object
print(PointLinks.to_json())

# convert the object into a dict
point_links_dict = point_links_instance.to_dict()
# create an instance of PointLinks from a dict
point_links_from_dict = PointLinks.from_dict(point_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


