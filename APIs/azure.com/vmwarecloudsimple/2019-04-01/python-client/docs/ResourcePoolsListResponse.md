# ResourcePoolsListResponse

List of resource pools response model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of ResourcePoolsList | [optional] 
**value** | [**List[ResourcePool]**](ResourcePool.md) | Results of the Resource pools list | [optional] 

## Example

```python
from openapi_client.models.resource_pools_list_response import ResourcePoolsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourcePoolsListResponse from a JSON string
resource_pools_list_response_instance = ResourcePoolsListResponse.from_json(json)
# print the JSON string representation of the object
print(ResourcePoolsListResponse.to_json())

# convert the object into a dict
resource_pools_list_response_dict = resource_pools_list_response_instance.to_dict()
# create an instance of ResourcePoolsListResponse from a dict
resource_pools_list_response_from_dict = ResourcePoolsListResponse.from_dict(resource_pools_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


