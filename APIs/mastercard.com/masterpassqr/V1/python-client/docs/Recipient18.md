# Recipient18

Information about the recipient/merchant of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData20**](AdditionalMerchantData20.md) |  | [optional] 
**address** | [**Address19**](Address19.md) |  | [optional] 
**email** | **str** | Email address of the recipient/merchant. Type: Alphanumeric Special [a-zA-Z0-9\\-@+.*$_], Maximum Length: 254 | [optional] 
**first_name** | **str** | First name of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40 | [optional] 
**last_name** | **str** | Last name of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40 | [optional] 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant.   Type: Numeric [0-9], Maximum Length: 4 | [optional] 
**middle_name** | **str** | Middle name of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40 | [optional] 
**phone** | **str** | Phone number of the recipient/merchant, Country code can be included.   Type: Numeric [0-9], Maximum Length: 15 | [optional] 

## Example

```python
from openapi_client.models.recipient18 import Recipient18

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient18 from a JSON string
recipient18_instance = Recipient18.from_json(json)
# print the JSON string representation of the object
print(Recipient18.to_json())

# convert the object into a dict
recipient18_dict = recipient18_instance.to_dict()
# create an instance of Recipient18 from a dict
recipient18_from_dict = Recipient18.from_dict(recipient18_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


