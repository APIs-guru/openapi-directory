# Sender94

Information about the sender of the transaction. If a PAN number is provided in the sender_account_uri, the sender information section is required. Details- Conditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address95**](Address95.md) |  | [optional] 
**date_of_birth** | **str** | Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**email** | **str** | Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254 | [optional] 
**first_name** | **str** | First name of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | [optional] 
**last_name** | **str** | Last name of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | [optional] 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the sender/merchant. This merchant category code should match valid code set by Mastercard rules. Details 1-4 | 
**middle_name** | **str** | Middle name of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-40 | [optional] 
**phone** | **str** | Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15 | [optional] 

## Example

```python
from openapi_client.models.sender94 import Sender94

# TODO update the JSON string below
json = "{}"
# create an instance of Sender94 from a JSON string
sender94_instance = Sender94.from_json(json)
# print the JSON string representation of the object
print(Sender94.to_json())

# convert the object into a dict
sender94_dict = sender94_instance.to_dict()
# create an instance of Sender94 from a dict
sender94_from_dict = Sender94.from_dict(sender94_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


