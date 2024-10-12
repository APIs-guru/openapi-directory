# DataFormatOptions

Options for data format adjustments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_int64_timestamp** | **bool** | Optional. Output timestamp as usec int64. Default is false. | [optional] 

## Example

```python
from openapi_client.models.data_format_options import DataFormatOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DataFormatOptions from a JSON string
data_format_options_instance = DataFormatOptions.from_json(json)
# print the JSON string representation of the object
print(DataFormatOptions.to_json())

# convert the object into a dict
data_format_options_dict = data_format_options_instance.to_dict()
# create an instance of DataFormatOptions from a dict
data_format_options_from_dict = DataFormatOptions.from_dict(data_format_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


