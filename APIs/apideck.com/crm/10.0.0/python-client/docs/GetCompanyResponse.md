# GetCompanyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Company**](Company.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_company_response import GetCompanyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCompanyResponse from a JSON string
get_company_response_instance = GetCompanyResponse.from_json(json)
# print the JSON string representation of the object
print(GetCompanyResponse.to_json())

# convert the object into a dict
get_company_response_dict = get_company_response_instance.to_dict()
# create an instance of GetCompanyResponse from a dict
get_company_response_from_dict = GetCompanyResponse.from_dict(get_company_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


