# XPSDataType

Indicated the type of data that can be stored in a structured data entity (e.g. a table).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatible_data_types** | [**List[XPSDataType]**](XPSDataType.md) | The highly compatible data types to this data type. | [optional] 
**list_element_type** | [**XPSDataType**](XPSDataType.md) |  | [optional] 
**nullable** | **bool** | If true, this DataType can also be &#x60;null&#x60;. | [optional] 
**struct_type** | [**XPSStructType**](XPSStructType.md) |  | [optional] 
**time_format** | **str** | If type_code &#x3D;&#x3D; TIMESTAMP then &#x60;time_format&#x60; provides the format in which that time field is expressed. The time_format must be written in &#x60;strftime&#x60; syntax. If time_format is not set, then the default format as described on the field is used. | [optional] 
**type_code** | **str** | Required. The TypeCode for this type. | [optional] 

## Example

```python
from openapi_client.models.xps_data_type import XPSDataType

# TODO update the JSON string below
json = "{}"
# create an instance of XPSDataType from a JSON string
xps_data_type_instance = XPSDataType.from_json(json)
# print the JSON string representation of the object
print(XPSDataType.to_json())

# convert the object into a dict
xps_data_type_dict = xps_data_type_instance.to_dict()
# create an instance of XPSDataType from a dict
xps_data_type_from_dict = XPSDataType.from_dict(xps_data_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


