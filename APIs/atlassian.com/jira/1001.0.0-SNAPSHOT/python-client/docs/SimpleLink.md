# SimpleLink

Details about the operations available in this version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** |  | [optional] 
**icon_class** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**style_class** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**weight** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.simple_link import SimpleLink

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleLink from a JSON string
simple_link_instance = SimpleLink.from_json(json)
# print the JSON string representation of the object
print(SimpleLink.to_json())

# convert the object into a dict
simple_link_dict = simple_link_instance.to_dict()
# create an instance of SimpleLink from a dict
simple_link_from_dict = SimpleLink.from_dict(simple_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


