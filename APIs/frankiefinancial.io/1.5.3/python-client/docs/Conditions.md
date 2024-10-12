# Conditions

Plan conditions to be displayed to customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**value** | [**List[NameValue]**](NameValue.md) |  | 

## Example

```python
from openapi_client.models.conditions import Conditions

# TODO update the JSON string below
json = "{}"
# create an instance of Conditions from a JSON string
conditions_instance = Conditions.from_json(json)
# print the JSON string representation of the object
print(Conditions.to_json())

# convert the object into a dict
conditions_dict = conditions_instance.to_dict()
# create an instance of Conditions from a dict
conditions_from_dict = Conditions.from_dict(conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


