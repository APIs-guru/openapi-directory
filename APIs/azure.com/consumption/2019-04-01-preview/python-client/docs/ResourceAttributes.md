# ResourceAttributes

The Resource model definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location | [optional] [readonly] 
**sku** | **str** | Resource sku | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_attributes import ResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceAttributes from a JSON string
resource_attributes_instance = ResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(ResourceAttributes.to_json())

# convert the object into a dict
resource_attributes_dict = resource_attributes_instance.to_dict()
# create an instance of ResourceAttributes from a dict
resource_attributes_from_dict = ResourceAttributes.from_dict(resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


