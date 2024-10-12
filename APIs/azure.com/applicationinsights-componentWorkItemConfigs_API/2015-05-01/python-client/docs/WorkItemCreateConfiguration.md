# WorkItemCreateConfiguration

Work item configuration creation payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_data_configuration** | **str** | Serialized JSON object for detailed properties | [optional] 
**connector_id** | **str** | Unique connector id | [optional] 
**validate_only** | **bool** | Boolean indicating validate only | [optional] 
**work_item_properties** | **Dict[str, str]** | Custom work item properties | [optional] 

## Example

```python
from openapi_client.models.work_item_create_configuration import WorkItemCreateConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemCreateConfiguration from a JSON string
work_item_create_configuration_instance = WorkItemCreateConfiguration.from_json(json)
# print the JSON string representation of the object
print(WorkItemCreateConfiguration.to_json())

# convert the object into a dict
work_item_create_configuration_dict = work_item_create_configuration_instance.to_dict()
# create an instance of WorkItemCreateConfiguration from a dict
work_item_create_configuration_from_dict = WorkItemCreateConfiguration.from_dict(work_item_create_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


