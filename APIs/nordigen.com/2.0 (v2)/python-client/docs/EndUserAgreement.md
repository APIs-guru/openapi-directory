# EndUserAgreement

Represents an end-user agreement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **datetime** | The date &amp; time at which the end user accepted the agreement. | [optional] [readonly] 
**access_scope** | **List[List[object]]** | Array containing one or several values of [&#39;balances&#39;, &#39;details&#39;, &#39;transactions&#39;] | [optional] [default to ["balances","details","transactions"]]
**access_valid_for_days** | **int** | Number of days from acceptance that the access can be used. | [optional] [default to 90]
**created** | **datetime** | The date &amp; time at which the end user agreement was created. | [optional] [readonly] 
**id** | **str** | The ID of this End User Agreement, used to refer to this end user agreement in other API calls. | [optional] [readonly] 
**institution_id** | **str** | an Institution ID for this EUA | 
**max_historical_days** | **int** | Maximum number of days of transaction data to retrieve. | [optional] [default to 90]

## Example

```python
from openapi_client.models.end_user_agreement import EndUserAgreement

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserAgreement from a JSON string
end_user_agreement_instance = EndUserAgreement.from_json(json)
# print the JSON string representation of the object
print(EndUserAgreement.to_json())

# convert the object into a dict
end_user_agreement_dict = end_user_agreement_instance.to_dict()
# create an instance of EndUserAgreement from a dict
end_user_agreement_from_dict = EndUserAgreement.from_dict(end_user_agreement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


