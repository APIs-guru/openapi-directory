# FrontDoorListResult

Result of the request to list Front Doors. It contains a list of Front Door objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of Front Door objects if there are any. | [optional] 
**value** | [**List[FrontDoor]**](FrontDoor.md) | List of Front Doors within a resource group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.front_door_list_result import FrontDoorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FrontDoorListResult from a JSON string
front_door_list_result_instance = FrontDoorListResult.from_json(json)
# print the JSON string representation of the object
print(FrontDoorListResult.to_json())

# convert the object into a dict
front_door_list_result_dict = front_door_list_result_instance.to_dict()
# create an instance of FrontDoorListResult from a dict
front_door_list_result_from_dict = FrontDoorListResult.from_dict(front_door_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


