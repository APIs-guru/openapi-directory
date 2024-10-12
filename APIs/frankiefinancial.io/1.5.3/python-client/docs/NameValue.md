# NameValue

Name/Value pair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**value** | **List[str]** |  | 

## Example

```python
from openapi_client.models.name_value import NameValue

# TODO update the JSON string below
json = "{}"
# create an instance of NameValue from a JSON string
name_value_instance = NameValue.from_json(json)
# print the JSON string representation of the object
print(NameValue.to_json())

# convert the object into a dict
name_value_dict = name_value_instance.to_dict()
# create an instance of NameValue from a dict
name_value_from_dict = NameValue.from_dict(name_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


