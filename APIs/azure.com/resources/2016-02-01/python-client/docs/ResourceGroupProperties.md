# ResourceGroupProperties

The resource group properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_group_properties import ResourceGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupProperties from a JSON string
resource_group_properties_instance = ResourceGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupProperties.to_json())

# convert the object into a dict
resource_group_properties_dict = resource_group_properties_instance.to_dict()
# create an instance of ResourceGroupProperties from a dict
resource_group_properties_from_dict = ResourceGroupProperties.from_dict(resource_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


