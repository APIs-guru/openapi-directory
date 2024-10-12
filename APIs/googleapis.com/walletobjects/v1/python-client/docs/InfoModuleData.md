# InfoModuleData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_value_rows** | [**List[LabelValueRow]**](LabelValueRow.md) | A list of collections of labels and values. These will be displayed one after the other in a singular column. | [optional] 
**show_last_update_time** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.info_module_data import InfoModuleData

# TODO update the JSON string below
json = "{}"
# create an instance of InfoModuleData from a JSON string
info_module_data_instance = InfoModuleData.from_json(json)
# print the JSON string representation of the object
print(InfoModuleData.to_json())

# convert the object into a dict
info_module_data_dict = info_module_data_instance.to_dict()
# create an instance of InfoModuleData from a dict
info_module_data_from_dict = InfoModuleData.from_dict(info_module_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


