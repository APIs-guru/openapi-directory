# BasicFilter

The default filter associated with a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**Dict[str, FilterCriteria]**](FilterCriteria.md) | The criteria for showing/hiding values per column. The map&#39;s key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. | [optional] 
**filter_specs** | [**List[FilterSpec]**](FilterSpec.md) | The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**sort_specs** | [**List[SortSpec]**](SortSpec.md) | The sort order per column. Later specifications are used when values are equal in the earlier specifications. | [optional] 

## Example

```python
from openapi_client.models.basic_filter import BasicFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BasicFilter from a JSON string
basic_filter_instance = BasicFilter.from_json(json)
# print the JSON string representation of the object
print(BasicFilter.to_json())

# convert the object into a dict
basic_filter_dict = basic_filter_instance.to_dict()
# create an instance of BasicFilter from a dict
basic_filter_from_dict = BasicFilter.from_dict(basic_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


