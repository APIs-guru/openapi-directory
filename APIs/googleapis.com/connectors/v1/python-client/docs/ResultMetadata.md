# ResultMetadata

Metadata of result field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type of the field. | [optional] 
**description** | **str** | A brief description of the field. | [optional] 
**var_field** | **str** | Name of the result field. | [optional] 
**json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.result_metadata import ResultMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ResultMetadata from a JSON string
result_metadata_instance = ResultMetadata.from_json(json)
# print the JSON string representation of the object
print(ResultMetadata.to_json())

# convert the object into a dict
result_metadata_dict = result_metadata_instance.to_dict()
# create an instance of ResultMetadata from a dict
result_metadata_from_dict = ResultMetadata.from_dict(result_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


