# Landmark

A face-specific landmark (for example, a face feature).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | [**Position**](Position.md) |  | [optional] 
**type** | **str** | Face landmark type. | [optional] 

## Example

```python
from openapi_client.models.landmark import Landmark

# TODO update the JSON string below
json = "{}"
# create an instance of Landmark from a JSON string
landmark_instance = Landmark.from_json(json)
# print the JSON string representation of the object
print(Landmark.to_json())

# convert the object into a dict
landmark_dict = landmark_instance.to_dict()
# create an instance of Landmark from a dict
landmark_from_dict = Landmark.from_dict(landmark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


