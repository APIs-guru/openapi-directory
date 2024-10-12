# Identifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**system** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.identifier import Identifier

# TODO update the JSON string below
json = "{}"
# create an instance of Identifier from a JSON string
identifier_instance = Identifier.from_json(json)
# print the JSON string representation of the object
print(Identifier.to_json())

# convert the object into a dict
identifier_dict = identifier_instance.to_dict()
# create an instance of Identifier from a dict
identifier_from_dict = Identifier.from_dict(identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


