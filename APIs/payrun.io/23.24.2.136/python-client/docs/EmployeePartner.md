# EmployeePartner

The employees' employee partner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | The employee partners&#39; first name | [optional] 
**initials** | **str** | The employee partners&#39; initials | [optional] 
**last_name** | **str** | The employee partners&#39; last name | [optional] 
**middle_name** | **str** | The employee partners&#39; middle name | [optional] 
**ni_number** | **str** | The employee partners&#39; ni number | [optional] 

## Example

```python
from openapi_client.models.employee_partner import EmployeePartner

# TODO update the JSON string below
json = "{}"
# create an instance of EmployeePartner from a JSON string
employee_partner_instance = EmployeePartner.from_json(json)
# print the JSON string representation of the object
print(EmployeePartner.to_json())

# convert the object into a dict
employee_partner_dict = employee_partner_instance.to_dict()
# create an instance of EmployeePartner from a dict
employee_partner_from_dict = EmployeePartner.from_dict(employee_partner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


