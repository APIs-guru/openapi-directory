# ArrayOfCompanyDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_dto** | [**List[CompanyDTO]**](CompanyDTO.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_of_company_dto import ArrayOfCompanyDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayOfCompanyDTO from a JSON string
array_of_company_dto_instance = ArrayOfCompanyDTO.from_json(json)
# print the JSON string representation of the object
print(ArrayOfCompanyDTO.to_json())

# convert the object into a dict
array_of_company_dto_dict = array_of_company_dto_instance.to_dict()
# create an instance of ArrayOfCompanyDTO from a dict
array_of_company_dto_from_dict = ArrayOfCompanyDTO.from_dict(array_of_company_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


