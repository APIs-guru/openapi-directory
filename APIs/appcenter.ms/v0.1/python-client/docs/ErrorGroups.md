# ErrorGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_groups** | [**List[ErrorsGroupList200ResponseErrorGroupsInner]**](ErrorsGroupList200ResponseErrorGroupsInner.md) |  | [optional] 
**next_link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_groups import ErrorGroups

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroups from a JSON string
error_groups_instance = ErrorGroups.from_json(json)
# print the JSON string representation of the object
print(ErrorGroups.to_json())

# convert the object into a dict
error_groups_dict = error_groups_instance.to_dict()
# create an instance of ErrorGroups from a dict
error_groups_from_dict = ErrorGroups.from_dict(error_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


