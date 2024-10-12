# ResultSetMetadata

Metadata about a ResultSet or PartialResultSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_type** | [**StructType**](StructType.md) |  | [optional] 
**transaction** | [**Transaction**](Transaction.md) |  | [optional] 
**undeclared_parameters** | [**StructType**](StructType.md) |  | [optional] 

## Example

```python
from openapi_client.models.result_set_metadata import ResultSetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ResultSetMetadata from a JSON string
result_set_metadata_instance = ResultSetMetadata.from_json(json)
# print the JSON string representation of the object
print(ResultSetMetadata.to_json())

# convert the object into a dict
result_set_metadata_dict = result_set_metadata_instance.to_dict()
# create an instance of ResultSetMetadata from a dict
result_set_metadata_from_dict = ResultSetMetadata.from_dict(result_set_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


