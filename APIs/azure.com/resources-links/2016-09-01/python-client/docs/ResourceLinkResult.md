# ResourceLinkResult

List of resource links.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] [readonly] 
**value** | [**List[ResourceLink]**](ResourceLink.md) | An array of resource links. | 

## Example

```python
from openapi_client.models.resource_link_result import ResourceLinkResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceLinkResult from a JSON string
resource_link_result_instance = ResourceLinkResult.from_json(json)
# print the JSON string representation of the object
print(ResourceLinkResult.to_json())

# convert the object into a dict
resource_link_result_dict = resource_link_result_instance.to_dict()
# create an instance of ResourceLinkResult from a dict
resource_link_result_from_dict = ResourceLinkResult.from_dict(resource_link_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


