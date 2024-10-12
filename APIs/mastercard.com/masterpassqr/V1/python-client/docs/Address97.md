# Address97

Address of the recipient/merchant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-25 | 
**country** | **str** | The recipient&#39;s/merchant&#39;s home country as an ISO 3166-1 alpha-3 country code, in uppercase. Details- Alpha, Length: 3 | 
**country_subdivision** | **str** | State or province of the recipient/merchant. If the merchant_transfer.recipient.address.country is USA or CAN, the country subdivision code is required.   Type: Alpha [A-Z], Length 2-3 | [optional] 
**line1** | **str** | First line of the address of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50 | [optional] 
**line2** | **str** | Second line of the address of the recipient/merchant.\\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Length: 1-50 | [optional] 
**postal_code** | **str** | Postal code of the recipient/merchant. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4 | [optional] 

## Example

```python
from openapi_client.models.address97 import Address97

# TODO update the JSON string below
json = "{}"
# create an instance of Address97 from a JSON string
address97_instance = Address97.from_json(json)
# print the JSON string representation of the object
print(Address97.to_json())

# convert the object into a dict
address97_dict = address97_instance.to_dict()
# create an instance of Address97 from a dict
address97_from_dict = Address97.from_dict(address97_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


