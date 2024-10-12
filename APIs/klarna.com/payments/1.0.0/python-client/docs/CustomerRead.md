# CustomerRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_birth** | **str** | Customer’s date of birth. The format is ‘yyyy-mm-dd’ | [optional] 
**gender** | **str** | Customer’s gender - ‘male’ or ‘female’ | [optional] 
**organization_entity_type** | **str** | Organization entity type. Only applicable for B2B customers. | [optional] 
**organization_registration_id** | **str** | Organization registration id. Only applicable for B2B customers. | [optional] 
**title** | **str** | Customer’s Title. Allowed values per country: UK - \&quot;Mr\&quot;, \&quot;Ms\&quot; DE - \&quot;Herr\&quot;, \&quot;Frau\&quot; AT: \&quot;Herr, \&quot;Frau\&quot; CH: de-CH: \&quot;Herr, \&quot;Frau\&quot; it-CH: \&quot;Sig.\&quot;, \&quot;Sig.ra\&quot; fr-CH: \&quot;M\&quot;, \&quot;Mme\&quot;  BE: \&quot;Dhr.\&quot;, \&quot;Mevr.\&quot; NL: \&quot;Dhr.\&quot;, \&quot;Mevr.\&quot; | [optional] 
**type** | **str** | Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session. | [optional] 
**vat_id** | **str** | VAT ID. Only applicable for B2B customers. | [optional] 

## Example

```python
from openapi_client.models.customer_read import CustomerRead

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerRead from a JSON string
customer_read_instance = CustomerRead.from_json(json)
# print the JSON string representation of the object
print(CustomerRead.to_json())

# convert the object into a dict
customer_read_dict = customer_read_instance.to_dict()
# create an instance of CustomerRead from a dict
customer_read_from_dict = CustomerRead.from_dict(customer_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


