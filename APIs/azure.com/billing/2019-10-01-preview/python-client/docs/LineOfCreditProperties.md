# LineOfCreditProperties

The properties of the line of credit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_limit** | [**Amount**](Amount.md) |  | [optional] 
**reason** | **str** | The reason for the line of credit status when not approved. | [optional] [readonly] 
**remaining_balance** | [**Amount**](Amount.md) |  | [optional] 
**status** | **str** | The line of credit status. | [optional] 

## Example

```python
from openapi_client.models.line_of_credit_properties import LineOfCreditProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LineOfCreditProperties from a JSON string
line_of_credit_properties_instance = LineOfCreditProperties.from_json(json)
# print the JSON string representation of the object
print(LineOfCreditProperties.to_json())

# convert the object into a dict
line_of_credit_properties_dict = line_of_credit_properties_instance.to_dict()
# create an instance of LineOfCreditProperties from a dict
line_of_credit_properties_from_dict = LineOfCreditProperties.from_dict(line_of_credit_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


