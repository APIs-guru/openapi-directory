# SpotEditable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**lat** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**picture** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.spot_editable import SpotEditable

# TODO update the JSON string below
json = "{}"
# create an instance of SpotEditable from a JSON string
spot_editable_instance = SpotEditable.from_json(json)
# print the JSON string representation of the object
print(SpotEditable.to_json())

# convert the object into a dict
spot_editable_dict = spot_editable_instance.to_dict()
# create an instance of SpotEditable from a dict
spot_editable_from_dict = SpotEditable.from_dict(spot_editable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


