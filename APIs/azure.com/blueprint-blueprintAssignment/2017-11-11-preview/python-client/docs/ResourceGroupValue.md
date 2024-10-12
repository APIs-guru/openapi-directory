# ResourceGroupValue

Represents an Azure resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource group | [optional] 
**name** | **str** | Name of the resource group | [optional] 

## Example

```python
from openapi_client.models.resource_group_value import ResourceGroupValue

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupValue from a JSON string
resource_group_value_instance = ResourceGroupValue.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupValue.to_json())

# convert the object into a dict
resource_group_value_dict = resource_group_value_instance.to_dict()
# create an instance of ResourceGroupValue from a dict
resource_group_value_from_dict = ResourceGroupValue.from_dict(resource_group_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


