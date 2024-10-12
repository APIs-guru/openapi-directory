# ResourceGroupListResult

List of resource groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | 
**value** | [**List[ResourceGroup]**](ResourceGroup.md) | Gets or sets the list of resource groups. | [optional] 

## Example

```python
from openapi_client.models.resource_group_list_result import ResourceGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupListResult from a JSON string
resource_group_list_result_instance = ResourceGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupListResult.to_json())

# convert the object into a dict
resource_group_list_result_dict = resource_group_list_result_instance.to_dict()
# create an instance of ResourceGroupListResult from a dict
resource_group_list_result_from_dict = ResourceGroupListResult.from_dict(resource_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


