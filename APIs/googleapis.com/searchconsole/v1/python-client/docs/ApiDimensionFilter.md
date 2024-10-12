# ApiDimensionFilter

A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** |  | [optional] 
**expression** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_dimension_filter import ApiDimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDimensionFilter from a JSON string
api_dimension_filter_instance = ApiDimensionFilter.from_json(json)
# print the JSON string representation of the object
print(ApiDimensionFilter.to_json())

# convert the object into a dict
api_dimension_filter_dict = api_dimension_filter_instance.to_dict()
# create an instance of ApiDimensionFilter from a dict
api_dimension_filter_from_dict = ApiDimensionFilter.from_dict(api_dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


