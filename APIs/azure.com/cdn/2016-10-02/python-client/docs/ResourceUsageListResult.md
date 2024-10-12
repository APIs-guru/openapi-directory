# ResourceUsageListResult

Output of check resource usage API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of custom domain objects if there are any. | [optional] 
**value** | [**List[ResourceUsage]**](ResourceUsage.md) | List of resource usages. | [optional] 

## Example

```python
from openapi_client.models.resource_usage_list_result import ResourceUsageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUsageListResult from a JSON string
resource_usage_list_result_instance = ResourceUsageListResult.from_json(json)
# print the JSON string representation of the object
print(ResourceUsageListResult.to_json())

# convert the object into a dict
resource_usage_list_result_dict = resource_usage_list_result_instance.to_dict()
# create an instance of ResourceUsageListResult from a dict
resource_usage_list_result_from_dict = ResourceUsageListResult.from_dict(resource_usage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


