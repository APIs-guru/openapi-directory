# DataFlowSourceSetting

Definition of data flow source setting for debug.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_limit** | **int** | Defines the row limit of data flow source in debug. | [optional] 
**source_name** | **str** | The data flow source name. | [optional] 

## Example

```python
from openapi_client.models.data_flow_source_setting import DataFlowSourceSetting

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowSourceSetting from a JSON string
data_flow_source_setting_instance = DataFlowSourceSetting.from_json(json)
# print the JSON string representation of the object
print(DataFlowSourceSetting.to_json())

# convert the object into a dict
data_flow_source_setting_dict = data_flow_source_setting_instance.to_dict()
# create an instance of DataFlowSourceSetting from a dict
data_flow_source_setting_from_dict = DataFlowSourceSetting.from_dict(data_flow_source_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


