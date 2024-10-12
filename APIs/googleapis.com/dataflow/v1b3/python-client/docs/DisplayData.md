# DisplayData

Data provided with a pipeline or transform to provide descriptive info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Contains value if the data is of a boolean type. | [optional] 
**duration_value** | **str** | Contains value if the data is of duration type. | [optional] 
**float_value** | **float** | Contains value if the data is of float type. | [optional] 
**int64_value** | **str** | Contains value if the data is of int64 type. | [optional] 
**java_class_value** | **str** | Contains value if the data is of java class type. | [optional] 
**key** | **str** | The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system. | [optional] 
**label** | **str** | An optional label to display in a dax UI for the element. | [optional] 
**namespace** | **str** | The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering. | [optional] 
**short_str_value** | **str** | A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip. | [optional] 
**str_value** | **str** | Contains value if the data is of string type. | [optional] 
**timestamp_value** | **str** | Contains value if the data is of timestamp type. | [optional] 
**url** | **str** | An optional full URL. | [optional] 

## Example

```python
from openapi_client.models.display_data import DisplayData

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayData from a JSON string
display_data_instance = DisplayData.from_json(json)
# print the JSON string representation of the object
print(DisplayData.to_json())

# convert the object into a dict
display_data_dict = display_data_instance.to_dict()
# create an instance of DisplayData from a dict
display_data_from_dict = DisplayData.from_dict(display_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


