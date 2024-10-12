# Equation

A ParagraphElement representing an equation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. An Equation may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 

## Example

```python
from openapi_client.models.equation import Equation

# TODO update the JSON string below
json = "{}"
# create an instance of Equation from a JSON string
equation_instance = Equation.from_json(json)
# print the JSON string representation of the object
print(Equation.to_json())

# convert the object into a dict
equation_dict = equation_instance.to_dict()
# create an instance of Equation from a dict
equation_from_dict = Equation.from_dict(equation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


