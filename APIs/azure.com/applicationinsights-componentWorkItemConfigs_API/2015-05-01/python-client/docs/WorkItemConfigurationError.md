# WorkItemConfigurationError

Error associated with trying to get work item configuration or configurations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error detail code and explanation | [optional] 
**innererror** | [**InnerError**](InnerError.md) |  | [optional] 
**message** | **str** | Error message | [optional] 

## Example

```python
from openapi_client.models.work_item_configuration_error import WorkItemConfigurationError

# TODO update the JSON string below
json = "{}"
# create an instance of WorkItemConfigurationError from a JSON string
work_item_configuration_error_instance = WorkItemConfigurationError.from_json(json)
# print the JSON string representation of the object
print(WorkItemConfigurationError.to_json())

# convert the object into a dict
work_item_configuration_error_dict = work_item_configuration_error_instance.to_dict()
# create an instance of WorkItemConfigurationError from a dict
work_item_configuration_error_from_dict = WorkItemConfigurationError.from_dict(work_item_configuration_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


