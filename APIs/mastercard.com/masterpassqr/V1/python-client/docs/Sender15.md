# Sender15

Information about the sender of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData17**](AdditionalMerchantData17.md) |  | [optional] 
**address** | [**Address16**](Address16.md) |  | [optional] 
**email** | **str** | Email address of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9\\-@+.*$_], Maximum Length: 254 | [optional] 
**first_name** | **str** | First name of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40 | [optional] 
**last_name** | **str** | Last name of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40 | [optional] 
**middle_name** | **str** | Middle name of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 40 | [optional] 
**phone** | **str** | Phone number of the sender, Country code can be included.   Type: Numeric [0-9], Maximum Length: 15 | [optional] 

## Example

```python
from openapi_client.models.sender15 import Sender15

# TODO update the JSON string below
json = "{}"
# create an instance of Sender15 from a JSON string
sender15_instance = Sender15.from_json(json)
# print the JSON string representation of the object
print(Sender15.to_json())

# convert the object into a dict
sender15_dict = sender15_instance.to_dict()
# create an instance of Sender15 from a dict
sender15_from_dict = Sender15.from_dict(sender15_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


