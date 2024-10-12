# ExternalTransactionAddress

User's address for the external transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrative_area** | **str** | Optional. Top-level administrative subdivision of the country/region. Only required for transactions in India. Valid values are \&quot;ANDAMAN AND NICOBAR ISLANDS\&quot;, \&quot;ANDHRA PRADESH\&quot;, \&quot;ARUNACHAL PRADESH\&quot;, \&quot;ASSAM\&quot;, \&quot;BIHAR\&quot;, \&quot;CHANDIGARH\&quot;, \&quot;CHHATTISGARH\&quot;, \&quot;DADRA AND NAGAR HAVELI\&quot;, \&quot;DADRA AND NAGAR HAVELI AND DAMAN AND DIU\&quot;, \&quot;DAMAN AND DIU\&quot;, \&quot;DELHI\&quot;, \&quot;GOA\&quot;, \&quot;GUJARAT\&quot;, \&quot;HARYANA\&quot;, \&quot;HIMACHAL PRADESH\&quot;, \&quot;JAMMU AND KASHMIR\&quot;, \&quot;JHARKHAND\&quot;, \&quot;KARNATAKA\&quot;, \&quot;KERALA\&quot;, \&quot;LADAKH\&quot;, \&quot;LAKSHADWEEP\&quot;, \&quot;MADHYA PRADESH\&quot;, \&quot;MAHARASHTRA\&quot;, \&quot;MANIPUR\&quot;, \&quot;MEGHALAYA\&quot;, \&quot;MIZORAM\&quot;, \&quot;NAGALAND\&quot;, \&quot;ODISHA\&quot;, \&quot;PUDUCHERRY\&quot;, \&quot;PUNJAB\&quot;, \&quot;RAJASTHAN\&quot;, \&quot;SIKKIM\&quot;, \&quot;TAMIL NADU\&quot;, \&quot;TELANGANA\&quot;, \&quot;TRIPURA\&quot;, \&quot;UTTAR PRADESH\&quot;, \&quot;UTTARAKHAND\&quot;, and \&quot;WEST BENGAL\&quot;. | [optional] 
**region_code** | **str** | Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes). | [optional] 

## Example

```python
from openapi_client.models.external_transaction_address import ExternalTransactionAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalTransactionAddress from a JSON string
external_transaction_address_instance = ExternalTransactionAddress.from_json(json)
# print the JSON string representation of the object
print(ExternalTransactionAddress.to_json())

# convert the object into a dict
external_transaction_address_dict = external_transaction_address_instance.to_dict()
# create an instance of ExternalTransactionAddress from a dict
external_transaction_address_from_dict = ExternalTransactionAddress.from_dict(external_transaction_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


