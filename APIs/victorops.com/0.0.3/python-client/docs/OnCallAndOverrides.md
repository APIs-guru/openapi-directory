# OnCallAndOverrides


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[TeamScheduleOverlayResource]**](TeamScheduleOverlayResource.md) |  | [optional] 
**schedule** | [**List[TeamScheduleResource]**](TeamScheduleResource.md) |  | [optional] 
**team** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.on_call_and_overrides import OnCallAndOverrides

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallAndOverrides from a JSON string
on_call_and_overrides_instance = OnCallAndOverrides.from_json(json)
# print the JSON string representation of the object
print(OnCallAndOverrides.to_json())

# convert the object into a dict
on_call_and_overrides_dict = on_call_and_overrides_instance.to_dict()
# create an instance of OnCallAndOverrides from a dict
on_call_and_overrides_from_dict = OnCallAndOverrides.from_dict(on_call_and_overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


