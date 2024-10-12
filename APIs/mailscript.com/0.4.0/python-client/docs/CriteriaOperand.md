# CriteriaOperand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_and** | **List[str]** |  | [optional] 
**var_or** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.criteria_operand import CriteriaOperand

# TODO update the JSON string below
json = "{}"
# create an instance of CriteriaOperand from a JSON string
criteria_operand_instance = CriteriaOperand.from_json(json)
# print the JSON string representation of the object
print(CriteriaOperand.to_json())

# convert the object into a dict
criteria_operand_dict = criteria_operand_instance.to_dict()
# create an instance of CriteriaOperand from a dict
criteria_operand_from_dict = CriteriaOperand.from_dict(criteria_operand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


