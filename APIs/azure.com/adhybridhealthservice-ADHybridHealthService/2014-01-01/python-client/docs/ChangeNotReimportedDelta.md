# ChangeNotReimportedDelta

The delta in a change that is not re-imported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | **str** | The anchor. | [optional] 
**attributes** | [**List[AttributeDelta]**](AttributeDelta.md) | The attributes. | [optional] 
**dn_attributes** | [**List[AttributeDelta]**](AttributeDelta.md) | The delta attributes for distinguished names. | [optional] 
**operation_type** | **str** | The operation type. | [optional] 

## Example

```python
from openapi_client.models.change_not_reimported_delta import ChangeNotReimportedDelta

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeNotReimportedDelta from a JSON string
change_not_reimported_delta_instance = ChangeNotReimportedDelta.from_json(json)
# print the JSON string representation of the object
print(ChangeNotReimportedDelta.to_json())

# convert the object into a dict
change_not_reimported_delta_dict = change_not_reimported_delta_instance.to_dict()
# create an instance of ChangeNotReimportedDelta from a dict
change_not_reimported_delta_from_dict = ChangeNotReimportedDelta.from_dict(change_not_reimported_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


