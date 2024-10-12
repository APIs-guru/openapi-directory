# GetHrisCompanyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**HrisCompany**](HrisCompany.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_hris_company_response import GetHrisCompanyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetHrisCompanyResponse from a JSON string
get_hris_company_response_instance = GetHrisCompanyResponse.from_json(json)
# print the JSON string representation of the object
print(GetHrisCompanyResponse.to_json())

# convert the object into a dict
get_hris_company_response_dict = get_hris_company_response_instance.to_dict()
# create an instance of GetHrisCompanyResponse from a dict
get_hris_company_response_from_dict = GetHrisCompanyResponse.from_dict(get_hris_company_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


