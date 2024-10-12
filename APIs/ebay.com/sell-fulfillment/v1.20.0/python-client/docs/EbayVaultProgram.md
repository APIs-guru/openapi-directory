# EbayVaultProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_type** | **str** | This field specifies how an eBay vault order will be fulfilled. Supported options are:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Seller to Vault&lt;/b&gt;: the order will be shipped by the seller to an authenticator.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Vault to Vault&lt;/b&gt;: the order will be shipped from an eBay vault to the buyer&#39;s vault.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Vault to Buyer&lt;/b&gt;: the order will be shipped from an eBay vault to the buyer&#39;s shipping address.&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:EbayVaultFulfillmentTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.ebay_vault_program import EbayVaultProgram

# TODO update the JSON string below
json = "{}"
# create an instance of EbayVaultProgram from a JSON string
ebay_vault_program_instance = EbayVaultProgram.from_json(json)
# print the JSON string representation of the object
print(EbayVaultProgram.to_json())

# convert the object into a dict
ebay_vault_program_dict = ebay_vault_program_instance.to_dict()
# create an instance of EbayVaultProgram from a dict
ebay_vault_program_from_dict = EbayVaultProgram.from_dict(ebay_vault_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


