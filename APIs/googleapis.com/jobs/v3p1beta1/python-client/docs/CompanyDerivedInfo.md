# CompanyDerivedInfo

Derived details about the company.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headquarters_location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.company_derived_info import CompanyDerivedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CompanyDerivedInfo from a JSON string
company_derived_info_instance = CompanyDerivedInfo.from_json(json)
# print the JSON string representation of the object
print(CompanyDerivedInfo.to_json())

# convert the object into a dict
company_derived_info_dict = company_derived_info_instance.to_dict()
# create an instance of CompanyDerivedInfo from a dict
company_derived_info_from_dict = CompanyDerivedInfo.from_dict(company_derived_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


