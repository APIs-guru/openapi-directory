# EnumerationSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**EnumerationSetLinks**](EnumerationSetLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**serialize_description** | **bool** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enumeration_set import EnumerationSet

# TODO update the JSON string below
json = "{}"
# create an instance of EnumerationSet from a JSON string
enumeration_set_instance = EnumerationSet.from_json(json)
# print the JSON string representation of the object
print(EnumerationSet.to_json())

# convert the object into a dict
enumeration_set_dict = enumeration_set_instance.to_dict()
# create an instance of EnumerationSet from a dict
enumeration_set_from_dict = EnumerationSet.from_dict(enumeration_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


