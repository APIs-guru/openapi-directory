# UpdateResource

The Update Resource model definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.update_resource import UpdateResource

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateResource from a JSON string
update_resource_instance = UpdateResource.from_json(json)
# print the JSON string representation of the object
print(UpdateResource.to_json())

# convert the object into a dict
update_resource_dict = update_resource_instance.to_dict()
# create an instance of UpdateResource from a dict
update_resource_from_dict = UpdateResource.from_dict(update_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


