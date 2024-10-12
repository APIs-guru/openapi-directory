# DimensionFilter

Dimension filter specifies the filtering options on a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Should the match be case sensitive? Default is false. | [optional] 
**dimension_name** | **str** | The dimension to filter on. A DimensionFilter must contain a dimension. | [optional] 
**expressions** | **List[str]** | Strings or regular expression to match against. Only the first value of the list is used for comparison unless the operator is &#x60;IN_LIST&#x60;. If &#x60;IN_LIST&#x60; operator, then the entire list is used to filter the dimensions as explained in the description of the &#x60;IN_LIST&#x60; operator. | [optional] 
**var_not** | **bool** | Logical &#x60;NOT&#x60; operator. If this boolean is set to true, then the matching dimension values will be excluded in the report. The default is false. | [optional] 
**operator** | **str** | How to match the dimension to the expression. The default is REGEXP. | [optional] 

## Example

```python
from openapi_client.models.dimension_filter import DimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionFilter from a JSON string
dimension_filter_instance = DimensionFilter.from_json(json)
# print the JSON string representation of the object
print(DimensionFilter.to_json())

# convert the object into a dict
dimension_filter_dict = dimension_filter_instance.to_dict()
# create an instance of DimensionFilter from a dict
dimension_filter_from_dict = DimensionFilter.from_dict(dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


