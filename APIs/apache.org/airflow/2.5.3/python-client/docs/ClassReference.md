# ClassReference

Class reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_name** | **str** |  | [optional] [readonly] 
**module_path** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.class_reference import ClassReference

# TODO update the JSON string below
json = "{}"
# create an instance of ClassReference from a JSON string
class_reference_instance = ClassReference.from_json(json)
# print the JSON string representation of the object
print(ClassReference.to_json())

# convert the object into a dict
class_reference_dict = class_reference_instance.to_dict()
# create an instance of ClassReference from a dict
class_reference_from_dict = ClassReference.from_dict(class_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


