# HubListResult

Response of list hub operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Hub]**](Hub.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.hub_list_result import HubListResult

# TODO update the JSON string below
json = "{}"
# create an instance of HubListResult from a JSON string
hub_list_result_instance = HubListResult.from_json(json)
# print the JSON string representation of the object
print(HubListResult.to_json())

# convert the object into a dict
hub_list_result_dict = hub_list_result_instance.to_dict()
# create an instance of HubListResult from a dict
hub_list_result_from_dict = HubListResult.from_dict(hub_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


