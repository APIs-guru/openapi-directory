# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_addr1** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing address street. | [optional] 
**billing_addr2** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing address, line 2. | [optional] 
**billing_city** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing city. | [optional] 
**billing_country** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing country. | [optional] 
**billing_country_code** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 3 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;ISO numeric country code for the billing address. Refer to &lt;a href&#x3D;\&quot;/developer/api/reference#country-codes\&quot;target&#x3D;\&quot;_blank\&quot;&gt;Country Codes&lt;/a&gt; for a list of country codes. | [optional] 
**billing_state** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing state (abbreviated). | [optional] 
**billing_zip** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing zip code. | [optional] 
**billing_zip4** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Fixed length, 4 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer billing zip+4 code if applicable. | [optional] 
**customer_email** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 64 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer e-mail address. | [optional] 
**customer_firm_name** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 64 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer Business name if applicable.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Either customer first and last name or firm name is required.  | [optional] 
**customer_first_name** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer first name.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Either customer first and last name or firm name is required.  | [optional] 
**customer_last_name** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 32 AN&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer last name.&lt;br&gt;&lt;strong&gt;Conditional Requirement: &lt;/strong&gt;Either customer first and last name or firm name is required.  | [optional] 
**customer_phone** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 16 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Customer phone number. | [optional] 
**shipping_addresses** | [**List[ShippingAddress]**](ShippingAddress.md) | List of shipping addresses for customer. | [optional] 

## Example

```python
from openapi_client.models.customer import Customer

# TODO update the JSON string below
json = "{}"
# create an instance of Customer from a JSON string
customer_instance = Customer.from_json(json)
# print the JSON string representation of the object
print(Customer.to_json())

# convert the object into a dict
customer_dict = customer_instance.to_dict()
# create an instance of Customer from a dict
customer_from_dict = Customer.from_dict(customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


