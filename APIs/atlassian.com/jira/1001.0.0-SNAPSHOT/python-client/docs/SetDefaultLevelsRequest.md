# SetDefaultLevelsRequest

Details of new default levels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_values** | [**List[DefaultLevelValue]**](DefaultLevelValue.md) | List of objects with issue security scheme ID and new default level ID. | 

## Example

```python
from openapi_client.models.set_default_levels_request import SetDefaultLevelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetDefaultLevelsRequest from a JSON string
set_default_levels_request_instance = SetDefaultLevelsRequest.from_json(json)
# print the JSON string representation of the object
print(SetDefaultLevelsRequest.to_json())

# convert the object into a dict
set_default_levels_request_dict = set_default_levels_request_instance.to_dict()
# create an instance of SetDefaultLevelsRequest from a dict
set_default_levels_request_from_dict = SetDefaultLevelsRequest.from_dict(set_default_levels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


