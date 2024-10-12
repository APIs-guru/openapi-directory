# NameIdentifier

Identifies an object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the object | [optional] 

## Example

```python
from openapi_client.models.name_identifier import NameIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of NameIdentifier from a JSON string
name_identifier_instance = NameIdentifier.from_json(json)
# print the JSON string representation of the object
print(NameIdentifier.to_json())

# convert the object into a dict
name_identifier_dict = name_identifier_instance.to_dict()
# create an instance of NameIdentifier from a dict
name_identifier_from_dict = NameIdentifier.from_dict(name_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


