# ResourceAccess

Extension Client Access Section.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name. | [optional] 
**resource** | **str** | The resource. | [optional] 

## Example

```python
from openapi_client.models.resource_access import ResourceAccess

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceAccess from a JSON string
resource_access_instance = ResourceAccess.from_json(json)
# print the JSON string representation of the object
print(ResourceAccess.to_json())

# convert the object into a dict
resource_access_dict = resource_access_instance.to_dict()
# create an instance of ResourceAccess from a dict
resource_access_from_dict = ResourceAccess.from_dict(resource_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


