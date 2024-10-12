# ManagementGroupListResult

The result of listing management groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next page of results. | [optional] [readonly] 
**value** | [**List[ManagementGroupInfo]**](ManagementGroupInfo.md) | The list of management groups. | [optional] 

## Example

```python
from openapi_client.models.management_group_list_result import ManagementGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupListResult from a JSON string
management_group_list_result_instance = ManagementGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupListResult.to_json())

# convert the object into a dict
management_group_list_result_dict = management_group_list_result_instance.to_dict()
# create an instance of ManagementGroupListResult from a dict
management_group_list_result_from_dict = ManagementGroupListResult.from_dict(management_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


