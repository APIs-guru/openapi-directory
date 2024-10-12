# GaDataColumnHeadersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_type** | **str** | Column Type. Either DIMENSION or METRIC. | [optional] 
**data_type** | **str** | Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. | [optional] 
**name** | **str** | Column name. | [optional] 

## Example

```python
from openapi_client.models.ga_data_column_headers_inner import GaDataColumnHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GaDataColumnHeadersInner from a JSON string
ga_data_column_headers_inner_instance = GaDataColumnHeadersInner.from_json(json)
# print the JSON string representation of the object
print(GaDataColumnHeadersInner.to_json())

# convert the object into a dict
ga_data_column_headers_inner_dict = ga_data_column_headers_inner_instance.to_dict()
# create an instance of GaDataColumnHeadersInner from a dict
ga_data_column_headers_inner_from_dict = GaDataColumnHeadersInner.from_dict(ga_data_column_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


