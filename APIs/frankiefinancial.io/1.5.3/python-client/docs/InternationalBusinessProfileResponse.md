# InternationalBusinessProfileResponse

This wraps the search response details from Kyckr 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_profile** | [**CompanyProfileDTO**](CompanyProfileDTO.md) |  | [optional] 
**check_id** | **str** | Unique ID for the individual check that was run.  | [optional] 
**entity_id** | **str** | If the response was successful and we returned a company profile, we save this as an ORGANISATION type entity in our service. We will also save the profile result as a REPORT type document, attached to the entity.  | [optional] 
**ib_response_code** | **int** | service provider response code | [optional] 
**ib_response_details** | **str** |  | [optional] 
**ib_retrieval_location** | **str** |  | [optional] 
**ib_transaction_id** | **str** | service provider ID | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 

## Example

```python
from openapi_client.models.international_business_profile_response import InternationalBusinessProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InternationalBusinessProfileResponse from a JSON string
international_business_profile_response_instance = InternationalBusinessProfileResponse.from_json(json)
# print the JSON string representation of the object
print(InternationalBusinessProfileResponse.to_json())

# convert the object into a dict
international_business_profile_response_dict = international_business_profile_response_instance.to_dict()
# create an instance of InternationalBusinessProfileResponse from a dict
international_business_profile_response_from_dict = InternationalBusinessProfileResponse.from_dict(international_business_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


