# ReturnAddressAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | CLDR country code (for example, \&quot;US\&quot;). | [optional] 
**locality** | **str** | City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). | [optional] 
**postal_code** | **str** | Postal code or ZIP (for example, \&quot;94043\&quot;). | [optional] 
**recipient_name** | **str** | Name of the recipient to address returns to. | [optional] 
**region** | **str** | Top-level administrative subdivision of the country. For example, a state like California (\&quot;CA\&quot;) or a province like Quebec (\&quot;QC\&quot;). | [optional] 
**street_address** | **List[str]** | Street-level part of the address. May be up to two lines, each line specified as an array element. | [optional] 

## Example

```python
from openapi_client.models.return_address_address import ReturnAddressAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnAddressAddress from a JSON string
return_address_address_instance = ReturnAddressAddress.from_json(json)
# print the JSON string representation of the object
print(ReturnAddressAddress.to_json())

# convert the object into a dict
return_address_address_dict = return_address_address_instance.to_dict()
# create an instance of ReturnAddressAddress from a dict
return_address_address_from_dict = ReturnAddressAddress.from_dict(return_address_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


