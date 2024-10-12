# ResourceListResult

List of resource groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | 
**value** | [**List[GenericResource]**](GenericResource.md) | Gets or sets the list of resource groups. | [optional] 

## Example

```python
from openapi_client.models.resource_list_result import ResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceListResult from a JSON string
resource_list_result_instance = ResourceListResult.from_json(json)
# print the JSON string representation of the object
print(ResourceListResult.to_json())

# convert the object into a dict
resource_list_result_dict = resource_list_result_instance.to_dict()
# create an instance of ResourceListResult from a dict
resource_list_result_from_dict = ResourceListResult.from_dict(resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


