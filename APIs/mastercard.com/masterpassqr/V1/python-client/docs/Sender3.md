# Sender3

Information about the sender of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData5**](AdditionalMerchantData5.md) |  | [optional] 
**address** | [**Address4**](Address4.md) |  | [optional] 
**authentication_value** | **str** | List of name/value pairs containing authentication  values. Refer &#39;Authentication Value URIs&#39; | [optional] 
**email** | **str** | Email address of the sender. Type: Alphanumeric Special [a-zA-Z0-9\\-@+.*$_], Length: 5-254 | [optional] 
**first_name** | **str** | First name of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | 
**last_name** | **str** | Last name of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | 
**middle_name** | **str** | Middle name of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | [optional] 
**phone** | **str** | Phone number of the sender, Country code can be included.   Type: Numeric [0-9], Length: 1-15 | [optional] 
**token_cryptogram** | [**TokenCryptogram6**](TokenCryptogram6.md) |  | [optional] 

## Example

```python
from openapi_client.models.sender3 import Sender3

# TODO update the JSON string below
json = "{}"
# create an instance of Sender3 from a JSON string
sender3_instance = Sender3.from_json(json)
# print the JSON string representation of the object
print(Sender3.to_json())

# convert the object into a dict
sender3_dict = sender3_instance.to_dict()
# create an instance of Sender3 from a dict
sender3_from_dict = Sender3.from_dict(sender3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


