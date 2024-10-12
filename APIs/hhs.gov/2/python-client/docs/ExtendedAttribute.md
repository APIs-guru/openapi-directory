# ExtendedAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.extended_attribute import ExtendedAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedAttribute from a JSON string
extended_attribute_instance = ExtendedAttribute.from_json(json)
# print the JSON string representation of the object
print(ExtendedAttribute.to_json())

# convert the object into a dict
extended_attribute_dict = extended_attribute_instance.to_dict()
# create an instance of ExtendedAttribute from a dict
extended_attribute_from_dict = ExtendedAttribute.from_dict(extended_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


