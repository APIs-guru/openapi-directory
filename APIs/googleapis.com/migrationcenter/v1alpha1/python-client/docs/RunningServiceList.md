# RunningServiceList

List of running guest OS services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | [**List[RunningService]**](RunningService.md) | Running service entries. | [optional] 

## Example

```python
from openapi_client.models.running_service_list import RunningServiceList

# TODO update the JSON string below
json = "{}"
# create an instance of RunningServiceList from a JSON string
running_service_list_instance = RunningServiceList.from_json(json)
# print the JSON string representation of the object
print(RunningServiceList.to_json())

# convert the object into a dict
running_service_list_dict = running_service_list_instance.to_dict()
# create an instance of RunningServiceList from a dict
running_service_list_from_dict = RunningServiceList.from_dict(running_service_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


