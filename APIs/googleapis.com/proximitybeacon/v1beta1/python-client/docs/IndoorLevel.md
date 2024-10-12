# IndoorLevel

Indoor level, a human-readable string as returned by Google Maps APIs, useful to indicate which floor of a building a beacon is located on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of this level. | [optional] 

## Example

```python
from openapi_client.models.indoor_level import IndoorLevel

# TODO update the JSON string below
json = "{}"
# create an instance of IndoorLevel from a JSON string
indoor_level_instance = IndoorLevel.from_json(json)
# print the JSON string representation of the object
print(IndoorLevel.to_json())

# convert the object into a dict
indoor_level_dict = indoor_level_instance.to_dict()
# create an instance of IndoorLevel from a dict
indoor_level_from_dict = IndoorLevel.from_dict(indoor_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


