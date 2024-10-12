# AvroOptions

Options for external data sources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_avro_logical_types** | **bool** | Optional. If sourceFormat is set to \&quot;AVRO\&quot;, indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). | [optional] 

## Example

```python
from openapi_client.models.avro_options import AvroOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AvroOptions from a JSON string
avro_options_instance = AvroOptions.from_json(json)
# print the JSON string representation of the object
print(AvroOptions.to_json())

# convert the object into a dict
avro_options_dict = avro_options_instance.to_dict()
# create an instance of AvroOptions from a dict
avro_options_from_dict = AvroOptions.from_dict(avro_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


