# Address16

Address of the sender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 25 | [optional] 
**country** | **str** | Country of the sender as an ISO alpha country code.   Type: Alpha [A-Z], Maximum Length: 3 | [optional] 
**country_subdivision** | **str** | State or province of the sender. If the merchant_transfer.sender.address.country is USA or CAN, the country subdivision is required.   Type: Alpha [A-Z], Maximum Length: 3 | [optional] 
**line1** | **str** | First line of the address of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 50 | [optional] 
**line2** | **str** | Second line of the address of the sender. \\n\\nType: Alphanumeric Special [a-zA-Z0-9 !\&quot;#$%&amp;&#39;()*+,-./\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÚÚÝàáâãäåçèéêëìíîïñòóôõöùúûüýÿ], Maximum Length: 50 | [optional] 
**postal_code** | **str** | Postal code of the sender.   Type: Alphanumeric Special [a-zA-Z0-9- ], Maximum Length: 10 | [optional] 

## Example

```python
from openapi_client.models.address16 import Address16

# TODO update the JSON string below
json = "{}"
# create an instance of Address16 from a JSON string
address16_instance = Address16.from_json(json)
# print the JSON string representation of the object
print(Address16.to_json())

# convert the object into a dict
address16_dict = address16_instance.to_dict()
# create an instance of Address16 from a dict
address16_from_dict = Address16.from_dict(address16_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


