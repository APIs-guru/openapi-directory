# McfDataColumnHeadersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_type** | **str** | Column Type. Either DIMENSION or METRIC. | [optional] 
**data_type** | **str** | Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc. | [optional] 
**name** | **str** | Column name. | [optional] 

## Example

```python
from openapi_client.models.mcf_data_column_headers_inner import McfDataColumnHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of McfDataColumnHeadersInner from a JSON string
mcf_data_column_headers_inner_instance = McfDataColumnHeadersInner.from_json(json)
# print the JSON string representation of the object
print(McfDataColumnHeadersInner.to_json())

# convert the object into a dict
mcf_data_column_headers_inner_dict = mcf_data_column_headers_inner_instance.to_dict()
# create an instance of McfDataColumnHeadersInner from a dict
mcf_data_column_headers_inner_from_dict = McfDataColumnHeadersInner.from_dict(mcf_data_column_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


