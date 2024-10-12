# LeaseTasksResponse

Response message for leasing tasks using LeaseTasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[Task]**](Task.md) | The leased tasks. | [optional] 

## Example

```python
from openapi_client.models.lease_tasks_response import LeaseTasksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LeaseTasksResponse from a JSON string
lease_tasks_response_instance = LeaseTasksResponse.from_json(json)
# print the JSON string representation of the object
print(LeaseTasksResponse.to_json())

# convert the object into a dict
lease_tasks_response_dict = lease_tasks_response_instance.to_dict()
# create an instance of LeaseTasksResponse from a dict
lease_tasks_response_from_dict = LeaseTasksResponse.from_dict(lease_tasks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


