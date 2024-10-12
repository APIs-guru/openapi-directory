# ResourceProvidersUpdate

custom resource provider update information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.resource_providers_update import ResourceProvidersUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProvidersUpdate from a JSON string
resource_providers_update_instance = ResourceProvidersUpdate.from_json(json)
# print the JSON string representation of the object
print(ResourceProvidersUpdate.to_json())

# convert the object into a dict
resource_providers_update_dict = resource_providers_update_instance.to_dict()
# create an instance of ResourceProvidersUpdate from a dict
resource_providers_update_from_dict = ResourceProvidersUpdate.from_dict(resource_providers_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


