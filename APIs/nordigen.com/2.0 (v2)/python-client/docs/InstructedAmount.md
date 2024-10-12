# InstructedAmount

InstructedAmountSerializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **decimal.Decimal** | Instructed amount | 
**currency** | **str** | Instructed amount currency | 

## Example

```python
from openapi_client.models.instructed_amount import InstructedAmount

# TODO update the JSON string below
json = "{}"
# create an instance of InstructedAmount from a JSON string
instructed_amount_instance = InstructedAmount.from_json(json)
# print the JSON string representation of the object
print(InstructedAmount.to_json())

# convert the object into a dict
instructed_amount_dict = instructed_amount_instance.to_dict()
# create an instance of InstructedAmount from a dict
instructed_amount_from_dict = InstructedAmount.from_dict(instructed_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


