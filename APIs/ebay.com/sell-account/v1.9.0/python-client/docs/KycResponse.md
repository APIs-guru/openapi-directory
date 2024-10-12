# KycResponse

This is the base response type of the <b>getKYC</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kyc_checks** | [**List[KycCheck]**](KycCheck.md) | This array contains one or more KYC checks required from a managed payments seller. The seller may need to provide more documentation and/or information about themselves, their company, or the bank account they are using for seller payouts.&lt;br/&gt;&lt;br/&gt;If no KYC checks are currently required from the seller, this array is not returned, and the seller only receives a &lt;code&gt;204 No Content&lt;/code&gt; HTTP status code. | [optional] 

## Example

```python
from openapi_client.models.kyc_response import KycResponse

# TODO update the JSON string below
json = "{}"
# create an instance of KycResponse from a JSON string
kyc_response_instance = KycResponse.from_json(json)
# print the JSON string representation of the object
print(KycResponse.to_json())

# convert the object into a dict
kyc_response_dict = kyc_response_instance.to_dict()
# create an instance of KycResponse from a dict
kyc_response_from_dict = KycResponse.from_dict(kyc_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


