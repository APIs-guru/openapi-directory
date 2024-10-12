# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_birth** | **str** | Customer’s date of birth. The format is ‘yyyy-mm-dd’ | [optional] 
**gender** | **str** | Customer’s gender - ‘male’ or ‘female’ | [optional] 
**last_four_ssn** | **str** | Last four digits of the customer&#39;s social security number. This value is available for US customers. | [optional] 
**national_identification_number** | **str** | The customer&#39;s national identification number. This value is available for EU customers utilizing national identification numbers. | [optional] 
**organization_entity_type** | **str** | Organization entity type. Only applicable for B2B customers. | [optional] 
**organization_registration_id** | **str** | Organization registration id. Only applicable for B2B customers. | [optional] 
**title** | **str** | Customer’s Title. Allowed values per country: UK - \&quot;Mr\&quot;, \&quot;Ms\&quot; DE - \&quot;Herr\&quot;, \&quot;Frau\&quot; AT: \&quot;Herr, \&quot;Frau\&quot; CH: de-CH: \&quot;Herr, \&quot;Frau\&quot; it-CH: \&quot;Sig.\&quot;, \&quot;Sig.ra\&quot; fr-CH: \&quot;M\&quot;, \&quot;Mme\&quot;  BE: \&quot;Dhr.\&quot;, \&quot;Mevr.\&quot; NL: \&quot;Dhr.\&quot;, \&quot;Mevr.\&quot; | [optional] 
**type** | **str** | Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session. | [optional] 
**vat_id** | **str** | VAT ID. Only applicable for B2B customers. | [optional] 

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


