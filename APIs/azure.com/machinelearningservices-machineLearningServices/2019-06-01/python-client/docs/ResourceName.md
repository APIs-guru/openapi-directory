# ResourceName

The Resource Name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value** | **str** | The localized name of the resource. | [optional] [readonly] 
**value** | **str** | The name of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_name import ResourceName

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceName from a JSON string
resource_name_instance = ResourceName.from_json(json)
# print the JSON string representation of the object
print(ResourceName.to_json())

# convert the object into a dict
resource_name_dict = resource_name_instance.to_dict()
# create an instance of ResourceName from a dict
resource_name_from_dict = ResourceName.from_dict(resource_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


