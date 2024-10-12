# DataSourceRestriction

Restriction on Datasource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_options** | [**List[FilterOptions]**](FilterOptions.md) | Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: \&quot;objecttype\&quot;, \&quot;type\&quot; and \&quot;mimetype\&quot;. For now, schema specific filters cannot be used to filter suggestions. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_restriction import DataSourceRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceRestriction from a JSON string
data_source_restriction_instance = DataSourceRestriction.from_json(json)
# print the JSON string representation of the object
print(DataSourceRestriction.to_json())

# convert the object into a dict
data_source_restriction_dict = data_source_restriction_instance.to_dict()
# create an instance of DataSourceRestriction from a dict
data_source_restriction_from_dict = DataSourceRestriction.from_dict(data_source_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


