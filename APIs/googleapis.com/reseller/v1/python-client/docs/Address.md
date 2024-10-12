# Address

JSON template for address of a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | A customer&#39;s physical address. An address can be composed of one to three lines. The &#x60;addressline2&#x60; and &#x60;addressLine3&#x60; are optional. | [optional] 
**address_line2** | **str** | Line 2 of the address. | [optional] 
**address_line3** | **str** | Line 3 of the address. | [optional] 
**contact_name** | **str** | The customer contact&#39;s name. This is required. | [optional] 
**country_code** | **str** | For &#x60;countryCode&#x60; information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer. | [optional] 
**kind** | **str** | Identifies the resource as a customer address. Value: &#x60;customers#address&#x60; | [optional] [default to 'customers#address']
**locality** | **str** | An example of a &#x60;locality&#x60; value is the city of &#x60;San Francisco&#x60;. | [optional] 
**organization_name** | **str** | The company or company division name. This is required. | [optional] 
**postal_code** | **str** | A &#x60;postalCode&#x60; example is a postal zip code such as &#x60;94043&#x60;. This property is required when creating a new customer. | [optional] 
**region** | **str** | An example of a &#x60;region&#x60; value is &#x60;CA&#x60; for the state of California. | [optional] 

## Example

```python
from openapi_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


