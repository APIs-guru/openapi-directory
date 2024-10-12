# XPSTableSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_specs** | [**Dict[str, XPSColumnSpec]**](XPSColumnSpec.md) | Mapping from column id to column spec. | [optional] 
**imported_data_size_in_bytes** | **str** | The total size of imported data of the table. | [optional] 
**row_count** | **str** | The number of rows in the table. | [optional] 
**time_column_id** | **int** | The id of the time column. | [optional] 
**valid_row_count** | **str** | The number of valid rows. | [optional] 

## Example

```python
from openapi_client.models.xps_table_spec import XPSTableSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTableSpec from a JSON string
xps_table_spec_instance = XPSTableSpec.from_json(json)
# print the JSON string representation of the object
print(XPSTableSpec.to_json())

# convert the object into a dict
xps_table_spec_dict = xps_table_spec_instance.to_dict()
# create an instance of XPSTableSpec from a dict
xps_table_spec_from_dict = XPSTableSpec.from_dict(xps_table_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


