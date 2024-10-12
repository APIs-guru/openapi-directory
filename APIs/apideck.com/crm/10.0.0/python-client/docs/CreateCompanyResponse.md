# CreateCompanyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_company_response import CreateCompanyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCompanyResponse from a JSON string
create_company_response_instance = CreateCompanyResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCompanyResponse.to_json())

# convert the object into a dict
create_company_response_dict = create_company_response_instance.to_dict()
# create an instance of CreateCompanyResponse from a dict
create_company_response_from_dict = CreateCompanyResponse.from_dict(create_company_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


