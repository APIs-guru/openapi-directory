# SetDefaultPriorityRequest

The new default issue priority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the new default issue priority. Must be an existing ID or null. Setting this to null erases the default priority setting. | 

## Example

```python
from openapi_client.models.set_default_priority_request import SetDefaultPriorityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetDefaultPriorityRequest from a JSON string
set_default_priority_request_instance = SetDefaultPriorityRequest.from_json(json)
# print the JSON string representation of the object
print(SetDefaultPriorityRequest.to_json())

# convert the object into a dict
set_default_priority_request_dict = set_default_priority_request_instance.to_dict()
# create an instance of SetDefaultPriorityRequest from a dict
set_default_priority_request_from_dict = SetDefaultPriorityRequest.from_dict(set_default_priority_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


