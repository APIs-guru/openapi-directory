# ResourceId

Generic pointer to a resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.resource_id import ResourceId

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceId from a JSON string
resource_id_instance = ResourceId.from_json(json)
# print the JSON string representation of the object
print(ResourceId.to_json())

# convert the object into a dict
resource_id_dict = resource_id_instance.to_dict()
# create an instance of ResourceId from a dict
resource_id_from_dict = ResourceId.from_dict(resource_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


