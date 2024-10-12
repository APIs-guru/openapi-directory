# DmsBaseObject

Base class for all objects under DataManager Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dms_base_object import DmsBaseObject

# TODO update the JSON string below
json = "{}"
# create an instance of DmsBaseObject from a JSON string
dms_base_object_instance = DmsBaseObject.from_json(json)
# print the JSON string representation of the object
print(DmsBaseObject.to_json())

# convert the object into a dict
dms_base_object_dict = dms_base_object_instance.to_dict()
# create an instance of DmsBaseObject from a dict
dms_base_object_from_dict = DmsBaseObject.from_dict(dms_base_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


