# DataFlowStagingInfo

Staging info for execute data flow activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_path** | **str** | Folder path for staging blob. | [optional] 
**linked_service** | [**LinkedServiceReference**](LinkedServiceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_flow_staging_info import DataFlowStagingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowStagingInfo from a JSON string
data_flow_staging_info_instance = DataFlowStagingInfo.from_json(json)
# print the JSON string representation of the object
print(DataFlowStagingInfo.to_json())

# convert the object into a dict
data_flow_staging_info_dict = data_flow_staging_info_instance.to_dict()
# create an instance of DataFlowStagingInfo from a dict
data_flow_staging_info_from_dict = DataFlowStagingInfo.from_dict(data_flow_staging_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


