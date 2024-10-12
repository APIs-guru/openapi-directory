# PowerBIOutputDataSource

Describes a Power BI output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PowerBIOutputDataSourceProperties**](PowerBIOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.power_bi_output_data_source import PowerBIOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of PowerBIOutputDataSource from a JSON string
power_bi_output_data_source_instance = PowerBIOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(PowerBIOutputDataSource.to_json())

# convert the object into a dict
power_bi_output_data_source_dict = power_bi_output_data_source_instance.to_dict()
# create an instance of PowerBIOutputDataSource from a dict
power_bi_output_data_source_from_dict = PowerBIOutputDataSource.from_dict(power_bi_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


