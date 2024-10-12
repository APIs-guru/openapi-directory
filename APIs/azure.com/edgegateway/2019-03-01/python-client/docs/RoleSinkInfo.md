# RoleSinkInfo

Compute role against which events will be raised.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_id** | **str** | Compute role ID. | 

## Example

```python
from openapi_client.models.role_sink_info import RoleSinkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RoleSinkInfo from a JSON string
role_sink_info_instance = RoleSinkInfo.from_json(json)
# print the JSON string representation of the object
print(RoleSinkInfo.to_json())

# convert the object into a dict
role_sink_info_dict = role_sink_info_instance.to_dict()
# create an instance of RoleSinkInfo from a dict
role_sink_info_from_dict = RoleSinkInfo.from_dict(role_sink_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


