# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrative_area** | **str** | Required. Top-level administrative subdivision of the country. For example, a state like California (\&quot;CA\&quot;) or a province like Quebec (\&quot;QC\&quot;). | [optional] 
**city** | **str** | Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). | [optional] 
**country** | **str** | Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, \&quot;US\&quot;). | [optional] 
**postal_code** | **str** | Required. Postal code or ZIP (for example, \&quot;94043\&quot;). | [optional] 
**street_address** | **str** | Street-level part of the address. Use &#x60;\\n&#x60; to add a second line. | [optional] 

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


