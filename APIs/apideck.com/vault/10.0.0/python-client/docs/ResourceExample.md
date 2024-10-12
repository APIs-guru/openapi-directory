# ResourceExample


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_response** | **object** | Example response from the downstream API | [optional] 
**resource** | [**LinkedConnectorResource**](LinkedConnectorResource.md) |  | [optional] 
**service_id** | **str** | Service provider identifier | [optional] 
**unified_api** | [**UnifiedApiId**](UnifiedApiId.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_example import ResourceExample

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceExample from a JSON string
resource_example_instance = ResourceExample.from_json(json)
# print the JSON string representation of the object
print(ResourceExample.to_json())

# convert the object into a dict
resource_example_dict = resource_example_instance.to_dict()
# create an instance of ResourceExample from a dict
resource_example_from_dict = ResourceExample.from_dict(resource_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


