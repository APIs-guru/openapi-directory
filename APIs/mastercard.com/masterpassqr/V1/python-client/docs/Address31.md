# Address31

Address of the sender. Optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25 | 
**country** | **str** | Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3 | 
**country_subdivision** | **str** | State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3 | [optional] 
**line1** | **str** | First line of the address of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50 | [optional] 
**line2** | **str** | Second line of the address of the sender.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50 | [optional] 
**postal_code** | **str** | Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4 | [optional] 

## Example

```python
from openapi_client.models.address31 import Address31

# TODO update the JSON string below
json = "{}"
# create an instance of Address31 from a JSON string
address31_instance = Address31.from_json(json)
# print the JSON string representation of the object
print(Address31.to_json())

# convert the object into a dict
address31_dict = address31_instance.to_dict()
# create an instance of Address31 from a dict
address31_from_dict = Address31.from_dict(address31_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


