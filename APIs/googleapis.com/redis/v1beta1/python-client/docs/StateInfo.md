# StateInfo

Represents additional information about the state of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_info** | [**UpdateInfo**](UpdateInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.state_info import StateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StateInfo from a JSON string
state_info_instance = StateInfo.from_json(json)
# print the JSON string representation of the object
print(StateInfo.to_json())

# convert the object into a dict
state_info_dict = state_info_instance.to_dict()
# create an instance of StateInfo from a dict
state_info_from_dict = StateInfo.from_dict(state_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


