# CustomerPostalAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | A customer&#39;s physical address. The address can be composed of one to three lines. | [optional] 
**address_line2** | **str** | Address line 2 of the address. | [optional] 
**address_line3** | **str** | Address line 3 of the address. | [optional] 
**contact_name** | **str** | The customer contact&#39;s name. | [optional] 
**country_code** | **str** | This is a required property. For &#x60;countryCode&#x60; information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm). | [optional] 
**locality** | **str** | Name of the locality. An example of a locality value is the city of &#x60;San Francisco&#x60;. | [optional] 
**organization_name** | **str** | The company or company division name. | [optional] 
**postal_code** | **str** | The postal code. A postalCode example is a postal zip code such as &#x60;10009&#x60;. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element. | [optional] 
**region** | **str** | Name of the region. An example of a region value is &#x60;NY&#x60; for the state of New York. | [optional] 

## Example

```python
from openapi_client.models.customer_postal_address import CustomerPostalAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerPostalAddress from a JSON string
customer_postal_address_instance = CustomerPostalAddress.from_json(json)
# print the JSON string representation of the object
print(CustomerPostalAddress.to_json())

# convert the object into a dict
customer_postal_address_dict = customer_postal_address_instance.to_dict()
# create an instance of CustomerPostalAddress from a dict
customer_postal_address_from_dict = CustomerPostalAddress.from_dict(customer_postal_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


