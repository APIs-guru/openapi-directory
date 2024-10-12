# LineOfCredit

Line of credit resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LineOfCreditProperties**](LineOfCreditProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.line_of_credit import LineOfCredit

# TODO update the JSON string below
json = "{}"
# create an instance of LineOfCredit from a JSON string
line_of_credit_instance = LineOfCredit.from_json(json)
# print the JSON string representation of the object
print(LineOfCredit.to_json())

# convert the object into a dict
line_of_credit_dict = line_of_credit_instance.to_dict()
# create an instance of LineOfCredit from a dict
line_of_credit_from_dict = LineOfCredit.from_dict(line_of_credit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


