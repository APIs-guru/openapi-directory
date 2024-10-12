# NameAndKind

Basic metadata about a counter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Counter aggregation kind. | [optional] 
**name** | **str** | Name of the counter. | [optional] 

## Example

```python
from openapi_client.models.name_and_kind import NameAndKind

# TODO update the JSON string below
json = "{}"
# create an instance of NameAndKind from a JSON string
name_and_kind_instance = NameAndKind.from_json(json)
# print the JSON string representation of the object
print(NameAndKind.to_json())

# convert the object into a dict
name_and_kind_dict = name_and_kind_instance.to_dict()
# create an instance of NameAndKind from a dict
name_and_kind_from_dict = NameAndKind.from_dict(name_and_kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


