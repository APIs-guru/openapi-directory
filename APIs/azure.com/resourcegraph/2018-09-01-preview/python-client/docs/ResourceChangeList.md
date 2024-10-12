# ResourceChangeList

A list of changes associated with a resource over a specific time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_token** | **object** | Skip token that encodes the skip information while executing the current request | [optional] 
**changes** | [**List[ResourceChangeData]**](ResourceChangeData.md) | The pageable value returned by the operation, i.e. a list of changes to the resource.  - The list is ordered from the most recent changes to the least recent changes. - This list will be empty if there were no changes during the requested interval. - The &#x60;Before&#x60; snapshot timestamp value of the oldest change can be outside of the specified time interval. | [optional] 

## Example

```python
from openapi_client.models.resource_change_list import ResourceChangeList

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceChangeList from a JSON string
resource_change_list_instance = ResourceChangeList.from_json(json)
# print the JSON string representation of the object
print(ResourceChangeList.to_json())

# convert the object into a dict
resource_change_list_dict = resource_change_list_instance.to_dict()
# create an instance of ResourceChangeList from a dict
resource_change_list_from_dict = ResourceChangeList.from_dict(resource_change_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


