# Recipient7

Information about the recipient/merchant of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData9**](AdditionalMerchantData9.md) |  | [optional] 
**address** | [**Address8**](Address8.md) |  | 
**authentication_value** | **str** | List of name/value pairs containing authentication  values. Refer &#39;Authentication Value URIs&#39; | [optional] 
**email** | **str** | Email address of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9\\-@+.*$_], Length: 5-254 | [optional] 
**first_name** | **str** | First name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | 
**last_name** | **str** | Last name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules.   Type: Numeric [0-9], Length: 1-4 | 
**middle_name** | **str** | Middle name of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | [optional] 
**phone** | **str** | Phone number of the recipient/merchant, Country code can be included.   Type: Numeric [0-9], Length: 1-15 | [optional] 
**token_cryptogram** | [**TokenCryptogram10**](TokenCryptogram10.md) |  | [optional] 

## Example

```python
from openapi_client.models.recipient7 import Recipient7

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient7 from a JSON string
recipient7_instance = Recipient7.from_json(json)
# print the JSON string representation of the object
print(Recipient7.to_json())

# convert the object into a dict
recipient7_dict = recipient7_instance.to_dict()
# create an instance of Recipient7 from a dict
recipient7_from_dict = Recipient7.from_dict(recipient7_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


