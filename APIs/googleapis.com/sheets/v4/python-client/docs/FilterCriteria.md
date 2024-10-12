# FilterCriteria

Criteria for showing/hiding rows in a filter or filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**BooleanCondition**](BooleanCondition.md) |  | [optional] 
**hidden_values** | **List[str]** | Values that should be hidden. | [optional] 
**visible_background_color** | [**Color**](Color.md) |  | [optional] 
**visible_background_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**visible_foreground_color** | [**Color**](Color.md) |  | [optional] 
**visible_foreground_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter_criteria import FilterCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of FilterCriteria from a JSON string
filter_criteria_instance = FilterCriteria.from_json(json)
# print the JSON string representation of the object
print(FilterCriteria.to_json())

# convert the object into a dict
filter_criteria_dict = filter_criteria_instance.to_dict()
# create an instance of FilterCriteria from a dict
filter_criteria_from_dict = FilterCriteria.from_dict(filter_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


