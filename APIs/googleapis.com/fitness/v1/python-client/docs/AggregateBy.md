# AggregateBy

The specification of which data to aggregate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **str** | A data source ID to aggregate. Only data from the specified data source ID will be included in the aggregation. If specified, this data source must exist; the OAuth scopes in the supplied credentials must grant read access to this data type. The dataset in the response will have the same data source ID. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both. | [optional] 
**data_type_name** | **str** | The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived::com.google.android.gms:aggregated. If the user has no data for this data type, an empty data set will be returned. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both. | [optional] 

## Example

```python
from openapi_client.models.aggregate_by import AggregateBy

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateBy from a JSON string
aggregate_by_instance = AggregateBy.from_json(json)
# print the JSON string representation of the object
print(AggregateBy.to_json())

# convert the object into a dict
aggregate_by_dict = aggregate_by_instance.to_dict()
# create an instance of AggregateBy from a dict
aggregate_by_from_dict = AggregateBy.from_dict(aggregate_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


