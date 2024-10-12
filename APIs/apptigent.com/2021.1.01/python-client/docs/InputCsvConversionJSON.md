# InputCsvConversionJSON


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | **bool** | Include header row | [default to True]
**input** | **str** | CSV string | 

## Example

```python
from openapi_client.models.input_csv_conversion_json import InputCsvConversionJSON

# TODO update the JSON string below
json = "{}"
# create an instance of InputCsvConversionJSON from a JSON string
input_csv_conversion_json_instance = InputCsvConversionJSON.from_json(json)
# print the JSON string representation of the object
print(InputCsvConversionJSON.to_json())

# convert the object into a dict
input_csv_conversion_json_dict = input_csv_conversion_json_instance.to_dict()
# create an instance of InputCsvConversionJSON from a dict
input_csv_conversion_json_from_dict = InputCsvConversionJSON.from_dict(input_csv_conversion_json_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


