# ResourceWithWritableName

ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_with_writable_name import ResourceWithWritableName

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceWithWritableName from a JSON string
resource_with_writable_name_instance = ResourceWithWritableName.from_json(json)
# print the JSON string representation of the object
print(ResourceWithWritableName.to_json())

# convert the object into a dict
resource_with_writable_name_dict = resource_with_writable_name_instance.to_dict()
# create an instance of ResourceWithWritableName from a dict
resource_with_writable_name_from_dict = ResourceWithWritableName.from_dict(resource_with_writable_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


