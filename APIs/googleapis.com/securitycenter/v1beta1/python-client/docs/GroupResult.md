# GroupResult

Result containing the properties and count of a groupBy request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Total count of resources for the given properties. | [optional] 
**properties** | **Dict[str, object]** | Properties matching the groupBy fields in the request. | [optional] 

## Example

```python
from openapi_client.models.group_result import GroupResult

# TODO update the JSON string below
json = "{}"
# create an instance of GroupResult from a JSON string
group_result_instance = GroupResult.from_json(json)
# print the JSON string representation of the object
print(GroupResult.to_json())

# convert the object into a dict
group_result_dict = group_result_instance.to_dict()
# create an instance of GroupResult from a dict
group_result_from_dict = GroupResult.from_dict(group_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


