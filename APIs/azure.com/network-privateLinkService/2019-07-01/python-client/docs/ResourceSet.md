# ResourceSet

The base resource set for visibility and auto-approval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptions** | **List[str]** | The list of subscriptions. | [optional] 

## Example

```python
from openapi_client.models.resource_set import ResourceSet

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSet from a JSON string
resource_set_instance = ResourceSet.from_json(json)
# print the JSON string representation of the object
print(ResourceSet.to_json())

# convert the object into a dict
resource_set_dict = resource_set_instance.to_dict()
# create an instance of ResourceSet from a dict
resource_set_from_dict = ResourceSet.from_dict(resource_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


