# Recipient32

Information about the recipient/merchant of the transaction. If a PAN is provided in the recipient_account_uri, the recipient/merchant information section is required. Details- Conditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData34**](AdditionalMerchantData34.md) |  | [optional] 
**address** | [**Address33**](Address33.md) |  | 
**email** | **str** | Email address of the recipient/merchant. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254 | [optional] 
**first_name** | **str** | First name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | 
**last_name** | **str** | Last name of the recipient/merchant.If business name is XYZ : First name: XYZ ; Last name: XYZ; If business name is XYZ International: First name: XYZ  Last name: International ; if business name is XYZ DBA MA : First name: XYZ Last name: DBA MA.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules. Details 1-4 | 
**middle_name** | **str** | Middle name of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | [optional] 
**phone** | **str** | Phone number of the recipient/merchant. Phone number or email address should be provided if the partner is set up to receive notifications. Details- 1-15 | [optional] 

## Example

```python
from openapi_client.models.recipient32 import Recipient32

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient32 from a JSON string
recipient32_instance = Recipient32.from_json(json)
# print the JSON string representation of the object
print(Recipient32.to_json())

# convert the object into a dict
recipient32_dict = recipient32_instance.to_dict()
# create an instance of Recipient32 from a dict
recipient32_from_dict = Recipient32.from_dict(recipient32_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


