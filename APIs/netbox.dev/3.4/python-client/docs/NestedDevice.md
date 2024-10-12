# NestedDevice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_device import NestedDevice

# TODO update the JSON string below
json = "{}"
# create an instance of NestedDevice from a JSON string
nested_device_instance = NestedDevice.from_json(json)
# print the JSON string representation of the object
print(NestedDevice.to_json())

# convert the object into a dict
nested_device_dict = nested_device_instance.to_dict()
# create an instance of NestedDevice from a dict
nested_device_from_dict = NestedDevice.from_dict(nested_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


