# Level

Level information containing level number and its corresponding name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator. | [optional] 
**number** | **float** | Optional. Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK. | [optional] 

## Example

```python
from openapi_client.models.level import Level

# TODO update the JSON string below
json = "{}"
# create an instance of Level from a JSON string
level_instance = Level.from_json(json)
# print the JSON string representation of the object
print(Level.to_json())

# convert the object into a dict
level_dict = level_instance.to_dict()
# create an instance of Level from a dict
level_from_dict = Level.from_dict(level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


