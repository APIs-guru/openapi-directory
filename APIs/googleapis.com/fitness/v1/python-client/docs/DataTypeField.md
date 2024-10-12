# DataTypeField

In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The different supported formats for each field in a data type. | [optional] 
**name** | **str** | Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type. | [optional] 
**optional** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.data_type_field import DataTypeField

# TODO update the JSON string below
json = "{}"
# create an instance of DataTypeField from a JSON string
data_type_field_instance = DataTypeField.from_json(json)
# print the JSON string representation of the object
print(DataTypeField.to_json())

# convert the object into a dict
data_type_field_dict = data_type_field_instance.to_dict()
# create an instance of DataTypeField from a dict
data_type_field_from_dict = DataTypeField.from_dict(data_type_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


