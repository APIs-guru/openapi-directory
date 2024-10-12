# Axis

A chart axis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label of the axis. | [optional] 
**scale** | **str** | The axis scale. By default, a linear scale is used. | [optional] 

## Example

```python
from openapi_client.models.axis import Axis

# TODO update the JSON string below
json = "{}"
# create an instance of Axis from a JSON string
axis_instance = Axis.from_json(json)
# print the JSON string representation of the object
print(Axis.to_json())

# convert the object into a dict
axis_dict = axis_instance.to_dict()
# create an instance of Axis from a dict
axis_from_dict = Axis.from_dict(axis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


