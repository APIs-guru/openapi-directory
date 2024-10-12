# UpdateCompanyRequest

Input only. Request for updating a specified company.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | [**Company**](Company.md) |  | [optional] 
**update_mask** | **str** | Optional but strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported. | [optional] 

## Example

```python
from openapi_client.models.update_company_request import UpdateCompanyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCompanyRequest from a JSON string
update_company_request_instance = UpdateCompanyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCompanyRequest.to_json())

# convert the object into a dict
update_company_request_dict = update_company_request_instance.to_dict()
# create an instance of UpdateCompanyRequest from a dict
update_company_request_from_dict = UpdateCompanyRequest.from_dict(update_company_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


