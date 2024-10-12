# WorkItemConfiguration

Work item configuration associated with an application insights resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_display_name** | **str** | Configuration friendly name | [optional] 
**config_properties** | **str** | Serialized JSON object for detailed properties | [optional] 
**connector_id** | **str** | Connector identifier where work item is created | [optional] 
**id** | **str** | Unique Id for work item | [optional] 
**is_default** | **bool** | Boolean value indicating whether configuration is default | [optional] 

## Example

```python
from openapi_client.models.work_item_configuration import WorkItemConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemConfiguration from a JSON string
work_item_configuration_instance = WorkItemConfiguration.from_json(json)
# print the JSON string representation of the object
print(WorkItemConfiguration.to_json())

# convert the object into a dict
work_item_configuration_dict = work_item_configuration_instance.to_dict()
# create an instance of WorkItemConfiguration from a dict
work_item_configuration_from_dict = WorkItemConfiguration.from_dict(work_item_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


