# InstructedAmountRequest

InstructedAmountSerializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **decimal.Decimal** | Instructed amount | 
**currency** | **str** | Instructed amount currency | 

## Example

```python
from openapi_client.models.instructed_amount_request import InstructedAmountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstructedAmountRequest from a JSON string
instructed_amount_request_instance = InstructedAmountRequest.from_json(json)
# print the JSON string representation of the object
print(InstructedAmountRequest.to_json())

# convert the object into a dict
instructed_amount_request_dict = instructed_amount_request_instance.to_dict()
# create an instance of InstructedAmountRequest from a dict
instructed_amount_request_from_dict = InstructedAmountRequest.from_dict(instructed_amount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


