# EndUserAgreementRequest

Represents an end-user agreement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_scope** | **List[List[object]]** | Array containing one or several values of [&#39;balances&#39;, &#39;details&#39;, &#39;transactions&#39;] | [optional] [default to ["balances","details","transactions"]]
**access_valid_for_days** | **int** | Number of days from acceptance that the access can be used. | [optional] [default to 90]
**institution_id** | **str** | an Institution ID for this EUA | 
**max_historical_days** | **int** | Maximum number of days of transaction data to retrieve. | [optional] [default to 90]

## Example

```python
from openapi_client.models.end_user_agreement_request import EndUserAgreementRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserAgreementRequest from a JSON string
end_user_agreement_request_instance = EndUserAgreementRequest.from_json(json)
# print the JSON string representation of the object
print(EndUserAgreementRequest.to_json())

# convert the object into a dict
end_user_agreement_request_dict = end_user_agreement_request_instance.to_dict()
# create an instance of EndUserAgreementRequest from a dict
end_user_agreement_request_from_dict = EndUserAgreementRequest.from_dict(end_user_agreement_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


