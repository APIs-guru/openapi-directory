# ClassUpdate

Update of a classroom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the class | [optional] 
**section** | **str** | The section of the class | [optional] 

## Example

```python
from openapi_client.models.class_update import ClassUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ClassUpdate from a JSON string
class_update_instance = ClassUpdate.from_json(json)
# print the JSON string representation of the object
print(ClassUpdate.to_json())

# convert the object into a dict
class_update_dict = class_update_instance.to_dict()
# create an instance of ClassUpdate from a dict
class_update_from_dict = ClassUpdate.from_dict(class_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


