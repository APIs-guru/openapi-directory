# DataType

Indicated the type of data that can be stored in a structured data entity (e.g. a table).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_element_type** | [**DataType**](DataType.md) |  | [optional] 
**nullable** | **bool** | If true, this DataType can also be &#x60;NULL&#x60;. In .CSV files &#x60;NULL&#x60; value is expressed as an empty string. | [optional] 
**struct_type** | [**StructType**](StructType.md) |  | [optional] 
**time_format** | **str** | If type_code &#x3D;&#x3D; TIMESTAMP then &#x60;time_format&#x60; provides the format in which that time field is expressed. The time_format must either be one of: * &#x60;UNIX_SECONDS&#x60; * &#x60;UNIX_MILLISECONDS&#x60; * &#x60;UNIX_MICROSECONDS&#x60; * &#x60;UNIX_NANOSECONDS&#x60; (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in &#x60;strftime&#x60; syntax. If time_format is not set, then the default format as described on the type_code is used. | [optional] 
**type_code** | **str** | Required. The TypeCode for this type. | [optional] 

## Example

```python
from openapi_client.models.data_type import DataType

# TODO update the JSON string below
json = "{}"
# create an instance of DataType from a JSON string
data_type_instance = DataType.from_json(json)
# print the JSON string representation of the object
print(DataType.to_json())

# convert the object into a dict
data_type_dict = data_type_instance.to_dict()
# create an instance of DataType from a dict
data_type_from_dict = DataType.from_dict(data_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


