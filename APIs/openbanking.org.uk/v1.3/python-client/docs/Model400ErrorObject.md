# Model400ErrorObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**status** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.model400_error_object import Model400ErrorObject

# TODO update the JSON string below
json = "{}"
# create an instance of Model400ErrorObject from a JSON string
model400_error_object_instance = Model400ErrorObject.from_json(json)
# print the JSON string representation of the object
print(Model400ErrorObject.to_json())

# convert the object into a dict
model400_error_object_dict = model400_error_object_instance.to_dict()
# create an instance of Model400ErrorObject from a dict
model400_error_object_from_dict = Model400ErrorObject.from_dict(model400_error_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


