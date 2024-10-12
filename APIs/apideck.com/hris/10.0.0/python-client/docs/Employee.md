# Employee


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**bank_accounts** | [**List[BankAccount]**](BankAccount.md) |  | [optional] 
**birthday** | **date** | The date of birth of the person. | [optional] 
**company_id** | **str** | The unique identifier of the company. | [optional] 
**company_name** | **str** | The name of the company. | [optional] 
**compensations** | [**List[EmployeeCompensation]**](EmployeeCompensation.md) |  | [optional] 
**country_of_birth** | **str** | Country code according to ISO 3166-1 alpha-2. | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deceased_on** | **date** | The date the person deceased. | [optional] 
**deleted** | **bool** | Flag to indicate if the object is deleted. | [optional] 
**department** | **str** | The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field. | [optional] 
**department_id** | **str** | Unique identifier of the department ID this employee belongs to. | [optional] 
**department_name** | **str** | Name of the department this employee belongs to. | [optional] 
**description** | **str** | A description of the object. | [optional] 
**dietary_preference** | **str** | Indicate the employee&#39;s dietary preference. | [optional] 
**direct_reports** | **List[str]** | Direct reports is an array of ids that reflect the individuals in an organizational hierarchy who are directly supervised by this specific employee. | [optional] 
**display_name** | **str** | The name used to display the employee, often a combination of their first and last names. | [optional] 
**division** | **str** | The division the person is currently in. Usually a collection of departments or teams or regions. | [optional] 
**division_id** | **str** | Unique identifier of the division this employee belongs to. | [optional] 
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**employee_number** | **str** | An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company. | [optional] 
**employment_end_date** | **str** | An End Date is the date that the employee ended working at the company | [optional] 
**employment_role** | [**EmployeeEmploymentRole**](EmployeeEmploymentRole.md) |  | [optional] 
**employment_start_date** | **str** | A Start Date is the date that the employee started working at the company | [optional] 
**employment_status** | [**EmploymentStatus**](EmploymentStatus.md) |  | [optional] 
**ethnicity** | **str** | The ethnicity of the employee | [optional] 
**first_name** | **str** | The first name of the person. | [optional] 
**food_allergies** | **List[str]** | Indicate the employee&#39;s food allergies. | [optional] 
**gender** | [**Gender**](Gender.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**initials** | **str** | The initials of the person, usually derived from their first, middle, and last names. | [optional] 
**jobs** | [**List[EmployeeJob]**](EmployeeJob.md) |  | [optional] 
**languages** | **List[str]** |  | [optional] 
**last_name** | **str** | The last name of the person. | [optional] 
**leaving_reason** | **str** | The reason because the employment ended. | [optional] 
**manager** | [**EmployeeManager**](EmployeeManager.md) |  | [optional] 
**marital_status** | **str** | The marital status of the employee. | [optional] 
**middle_name** | **str** | Middle name of the person. | [optional] 
**nationalities** | **List[str]** |  | [optional] 
**partner** | [**Person**](Person.md) |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**photo_url** | **str** | The URL of the photo of a person. | [optional] 
**preferred_language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**preferred_name** | **str** | The name the employee prefers to be addressed by, which may be different from their legal name. | [optional] 
**probation_period** | [**ProbationPeriod**](ProbationPeriod.md) |  | [optional] 
**pronouns** | **str** | The preferred pronouns of the person. | [optional] 
**record_url** | **str** |  | [optional] 
**row_version** | **str** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
**salutation** | **str** | A formal salutation for the person. For example, &#39;Mr&#39;, &#39;Mrs&#39; | [optional] 
**social_links** | [**List[SocialLink]**](SocialLink.md) |  | [optional] 
**social_security_number** | **str** | A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions. | [optional] 
**source** | **str** | When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from. | [optional] 
**source_id** | **str** | Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS). | [optional] 
**tags** | **List[str]** |  | [optional] 
**tax_code** | **str** |  | [optional] 
**tax_id** | **str** |  | [optional] 
**team** | [**Team**](Team.md) |  | [optional] 
**timezone** | **str** | The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London. | [optional] 
**title** | **str** | The job title of the person. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**works_remote** | **bool** | Indicates if the employee works from a remote location. | [optional] 

## Example

```python
from openapi_client.models.employee import Employee

# TODO update the JSON string below
json = "{}"
# create an instance of Employee from a JSON string
employee_instance = Employee.from_json(json)
# print the JSON string representation of the object
print(Employee.to_json())

# convert the object into a dict
employee_dict = employee_instance.to_dict()
# create an instance of Employee from a dict
employee_from_dict = Employee.from_dict(employee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


