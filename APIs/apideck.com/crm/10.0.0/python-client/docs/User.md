# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**company_name** | **str** | The name of the company. | [optional] 
**created_at** | **str** | The date and time when the user was created. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**department** | **str** | The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field. | [optional] 
**description** | **str** | A description of the object. | [optional] 
**division** | **str** | The division the person is currently in. Usually a collection of departments or teams or regions. | [optional] 
**emails** | [**List[Email]**](Email.md) |  | 
**employee_number** | **str** | An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**id** | **str** | The unique identifier for the user | [optional] [readonly] 
**image** | **str** | The URL of the user&#39;s avatar | [optional] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**last_name** | **str** | The last name of the person. | [optional] 
**parent_id** | **str** | The parent user id | [optional] 
**password** | **str** | The password of the user | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**status** | **str** | The status of the user | [optional] 
**title** | **str** | The job title of the person. | [optional] 
**updated_at** | **str** | The date and time when the user was last updated. | [optional] [readonly] 
**username** | **str** | The username of the user | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


