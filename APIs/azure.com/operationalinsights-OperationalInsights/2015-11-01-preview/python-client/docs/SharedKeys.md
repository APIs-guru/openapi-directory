# SharedKeys

The shared keys for a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_shared_key** | **str** | The primary shared key of a workspace. | [optional] 
**secondary_shared_key** | **str** | The secondary shared key of a workspace. | [optional] 

## Example

```python
from openapi_client.models.shared_keys import SharedKeys

# TODO update the JSON string below
json = "{}"
# create an instance of SharedKeys from a JSON string
shared_keys_instance = SharedKeys.from_json(json)
# print the JSON string representation of the object
print(SharedKeys.to_json())

# convert the object into a dict
shared_keys_dict = shared_keys_instance.to_dict()
# create an instance of SharedKeys from a dict
shared_keys_from_dict = SharedKeys.from_dict(shared_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


