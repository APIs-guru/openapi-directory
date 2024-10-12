# OnCallOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | The override end time (ISO 8601) | [optional] 
**orig_on_call_user** | [**User**](User.md) |  | [optional] 
**override_on_call_user** | [**User**](User.md) |  | [optional] 
**start** | **str** | The override start time (ISO 8601) | [optional] 

## Example

```python
from openapi_client.models.on_call_override import OnCallOverride

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallOverride from a JSON string
on_call_override_instance = OnCallOverride.from_json(json)
# print the JSON string representation of the object
print(OnCallOverride.to_json())

# convert the object into a dict
on_call_override_dict = on_call_override_instance.to_dict()
# create an instance of OnCallOverride from a dict
on_call_override_from_dict = OnCallOverride.from_dict(on_call_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


