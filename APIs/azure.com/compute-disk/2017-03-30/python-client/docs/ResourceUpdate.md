# ResourceUpdate

The Resource model definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**DiskSku**](DiskSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.resource_update import ResourceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceUpdate from a JSON string
resource_update_instance = ResourceUpdate.from_json(json)
# print the JSON string representation of the object
print(ResourceUpdate.to_json())

# convert the object into a dict
resource_update_dict = resource_update_instance.to_dict()
# create an instance of ResourceUpdate from a dict
resource_update_from_dict = ResourceUpdate.from_dict(resource_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


