# ChangeNotReimportedEntry

The object entry in a change that is not re-imported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | **str** | The anchor. | [optional] 
**attributes** | [**List[AttributeDelta]**](AttributeDelta.md) | The attributes. | [optional] 
**dn** | **str** | The distinguished name. | [optional] 
**dn_attributes** | [**List[AttributeDelta]**](AttributeDelta.md) | The delta attributes for distinguished names. | [optional] 
**object_classes** | **List[str]** | The list of object classes. | [optional] 
**parent_anchor** | **str** | The parent anchor. | [optional] 
**primary_object_class** | **str** | The primary object class. | [optional] 

## Example

```python
from openapi_client.models.change_not_reimported_entry import ChangeNotReimportedEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeNotReimportedEntry from a JSON string
change_not_reimported_entry_instance = ChangeNotReimportedEntry.from_json(json)
# print the JSON string representation of the object
print(ChangeNotReimportedEntry.to_json())

# convert the object into a dict
change_not_reimported_entry_dict = change_not_reimported_entry_instance.to_dict()
# create an instance of ChangeNotReimportedEntry from a dict
change_not_reimported_entry_from_dict = ChangeNotReimportedEntry.from_dict(change_not_reimported_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


