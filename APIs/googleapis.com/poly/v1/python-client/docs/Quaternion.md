# Quaternion

A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see \"w: 1\" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**w** | **float** | The scalar component. | [optional] 
**x** | **float** | The x component. | [optional] 
**y** | **float** | The y component. | [optional] 
**z** | **float** | The z component. | [optional] 

## Example

```python
from openapi_client.models.quaternion import Quaternion

# TODO update the JSON string below
json = "{}"
# create an instance of Quaternion from a JSON string
quaternion_instance = Quaternion.from_json(json)
# print the JSON string representation of the object
print(Quaternion.to_json())

# convert the object into a dict
quaternion_dict = quaternion_instance.to_dict()
# create an instance of Quaternion from a dict
quaternion_from_dict = Quaternion.from_dict(quaternion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


