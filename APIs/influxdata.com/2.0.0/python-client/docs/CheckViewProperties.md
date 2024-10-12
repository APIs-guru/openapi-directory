# CheckViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check** | [**Check**](Check.md) |  | [optional] 
**check_id** | **str** |  | 
**colors** | [**List[DashboardColor]**](DashboardColor.md) | Colors define color encoding of data into a visualization | 
**legend_colorize_rows** | **bool** |  | [optional] 
**legend_hide** | **bool** |  | [optional] 
**legend_opacity** | **float** |  | [optional] 
**legend_orientation_threshold** | **int** |  | [optional] 
**queries** | [**List[DashboardQuery]**](DashboardQuery.md) |  | 
**shape** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.check_view_properties import CheckViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CheckViewProperties from a JSON string
check_view_properties_instance = CheckViewProperties.from_json(json)
# print the JSON string representation of the object
print(CheckViewProperties.to_json())

# convert the object into a dict
check_view_properties_dict = check_view_properties_instance.to_dict()
# create an instance of CheckViewProperties from a dict
check_view_properties_from_dict = CheckViewProperties.from_dict(check_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


