# Value

A message that can hold any of the supported value types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_value** | [**ArrayValue**](ArrayValue.md) |  | [optional] 
**boolean_value** | **bool** | A boolean value. | [optional] 
**bytes_value** | **bytearray** | A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries. | [optional] 
**double_value** | **float** | A double value. | [optional] 
**geo_point_value** | [**LatLng**](LatLng.md) |  | [optional] 
**integer_value** | **str** | An integer value. | [optional] 
**map_value** | [**MapValue**](MapValue.md) |  | [optional] 
**null_value** | **str** | A null value. | [optional] 
**reference_value** | **str** | A reference to a document. For example: &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. | [optional] 
**string_value** | **str** | A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries. | [optional] 
**timestamp_value** | **str** | A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down. | [optional] 

## Example

```python
from openapi_client.models.value import Value

# TODO update the JSON string below
json = "{}"
# create an instance of Value from a JSON string
value_instance = Value.from_json(json)
# print the JSON string representation of the object
print(Value.to_json())

# convert the object into a dict
value_dict = value_instance.to_dict()
# create an instance of Value from a dict
value_from_dict = Value.from_dict(value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


