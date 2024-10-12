# Orientation

Screen orientation of the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id for this orientation. Example: \&quot;portrait\&quot;. | [optional] 
**name** | **str** | A human-friendly name for this orientation. Example: \&quot;portrait\&quot;. | [optional] 
**tags** | **List[str]** | Tags for this dimension. Example: \&quot;default\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orientation import Orientation

# TODO update the JSON string below
json = "{}"
# create an instance of Orientation from a JSON string
orientation_instance = Orientation.from_json(json)
# print the JSON string representation of the object
print(Orientation.to_json())

# convert the object into a dict
orientation_dict = orientation_instance.to_dict()
# create an instance of Orientation from a dict
orientation_from_dict = Orientation.from_dict(orientation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


