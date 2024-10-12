# Row

Report data for each row. For example if RunReportRequest contains: ```none \"dimensions\": [ { \"name\": \"eventName\" }, { \"name\": \"countryId\" } ], \"metrics\": [ { \"name\": \"eventCount\" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none \"dimensionValues\": [ { \"value\": \"in_app_purchase\" }, { \"value\": \"JP\" } ], \"metricValues\": [ { \"value\": \"15\" } ] ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_values** | [**List[DimensionValue]**](DimensionValue.md) | List of requested dimension values. In a PivotReport, dimension_values are only listed for dimensions included in a pivot. | [optional] 
**metric_values** | [**List[MetricValue]**](MetricValue.md) | List of requested visible metric values. | [optional] 

## Example

```python
from openapi_client.models.row import Row

# TODO update the JSON string below
json = "{}"
# create an instance of Row from a JSON string
row_instance = Row.from_json(json)
# print the JSON string representation of the object
print(Row.to_json())

# convert the object into a dict
row_dict = row_instance.to_dict()
# create an instance of Row from a dict
row_from_dict = Row.from_dict(row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


