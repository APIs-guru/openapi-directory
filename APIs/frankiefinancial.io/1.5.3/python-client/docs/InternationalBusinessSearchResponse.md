# InternationalBusinessSearchResponse

This wraps the search response details from Kyckr 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companies** | [**ArrayOfCompanyDTO**](ArrayOfCompanyDTO.md) |  | [optional] 
**ib_continuation_key** | **str** |  | [optional] 
**ib_response_code** | **int** | service provider response code | [optional] 
**ib_response_details** | **str** |  | [optional] 
**ib_transaction_id** | **str** | service provider ID | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 

## Example

```python
from openapi_client.models.international_business_search_response import InternationalBusinessSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InternationalBusinessSearchResponse from a JSON string
international_business_search_response_instance = InternationalBusinessSearchResponse.from_json(json)
# print the JSON string representation of the object
print(InternationalBusinessSearchResponse.to_json())

# convert the object into a dict
international_business_search_response_dict = international_business_search_response_instance.to_dict()
# create an instance of InternationalBusinessSearchResponse from a dict
international_business_search_response_from_dict = InternationalBusinessSearchResponse.from_dict(international_business_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


