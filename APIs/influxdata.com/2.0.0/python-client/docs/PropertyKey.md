# PropertyKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** | Type of AST node | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.property_key import PropertyKey

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyKey from a JSON string
property_key_instance = PropertyKey.from_json(json)
# print the JSON string representation of the object
print(PropertyKey.to_json())

# convert the object into a dict
property_key_dict = property_key_instance.to_dict()
# create an instance of PropertyKey from a dict
property_key_from_dict = PropertyKey.from_dict(property_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


