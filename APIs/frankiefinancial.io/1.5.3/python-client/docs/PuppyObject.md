# PuppyObject

All valid customers get a puppy. Otherwise, no puppy for you!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asknicely1** | **str** |  | [optional] 
**asknicely2** | **str** |  | [optional] 
**asknicely3** | **str** |  | [optional] 
**asknicely4** | **str** |  | [optional] 
**asknicely5** | **str** |  | [optional] 
**asknicely6** | **str** |  | [optional] 
**asknicely7** | **str** |  | [optional] 
**commit** | **str** | Server version indication | [optional] 
**puppy** | **bool** |  | [default to True]

## Example

```python
from openapi_client.models.puppy_object import PuppyObject

# TODO update the JSON string below
json = "{}"
# create an instance of PuppyObject from a JSON string
puppy_object_instance = PuppyObject.from_json(json)
# print the JSON string representation of the object
print(PuppyObject.to_json())

# convert the object into a dict
puppy_object_dict = puppy_object_instance.to_dict()
# create an instance of PuppyObject from a dict
puppy_object_from_dict = PuppyObject.from_dict(puppy_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


