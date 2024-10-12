# DeleteCompanyResponse


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
from openapi_client.models.delete_company_response import DeleteCompanyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCompanyResponse from a JSON string
delete_company_response_instance = DeleteCompanyResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteCompanyResponse.to_json())

# convert the object into a dict
delete_company_response_dict = delete_company_response_instance.to_dict()
# create an instance of DeleteCompanyResponse from a dict
delete_company_response_from_dict = DeleteCompanyResponse.from_dict(delete_company_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


