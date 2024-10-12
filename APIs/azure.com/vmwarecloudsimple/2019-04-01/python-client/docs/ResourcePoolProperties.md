# ResourcePoolProperties

Properties of resource pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **str** | Hierarchical resource pool name | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_pool_properties import ResourcePoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResourcePoolProperties from a JSON string
resource_pool_properties_instance = ResourcePoolProperties.from_json(json)
# print the JSON string representation of the object
print(ResourcePoolProperties.to_json())

# convert the object into a dict
resource_pool_properties_dict = resource_pool_properties_instance.to_dict()
# create an instance of ResourcePoolProperties from a dict
resource_pool_properties_from_dict = ResourcePoolProperties.from_dict(resource_pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


