# TimeoutObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**TimeoutDescription**](TimeoutDescription.md) |  | [optional] 
**type** | [**TimeoutType**](TimeoutType.md) |  | [optional] 

## Example

```python
from openapi_client.models.timeout_object import TimeoutObject

# TODO update the JSON string below
json = "{}"
# create an instance of TimeoutObject from a JSON string
timeout_object_instance = TimeoutObject.from_json(json)
# print the JSON string representation of the object
print(TimeoutObject.to_json())

# convert the object into a dict
timeout_object_dict = timeout_object_instance.to_dict()
# create an instance of TimeoutObject from a dict
timeout_object_from_dict = TimeoutObject.from_dict(timeout_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


