# GenericObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **object** |  | [optional] [readonly] 
**object_id** | **int** |  | 
**object_type** | **str** |  | 

## Example

```python
from openapi_client.models.generic_object import GenericObject

# TODO update the JSON string below
json = "{}"
# create an instance of GenericObject from a JSON string
generic_object_instance = GenericObject.from_json(json)
# print the JSON string representation of the object
print(GenericObject.to_json())

# convert the object into a dict
generic_object_dict = generic_object_instance.to_dict()
# create an instance of GenericObject from a dict
generic_object_from_dict = GenericObject.from_dict(generic_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


