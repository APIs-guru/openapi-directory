# AccountAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | CLDR country code (for example, \&quot;US\&quot;). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts. | [optional] 
**locality** | **str** | City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). | [optional] 
**postal_code** | **str** | Postal code or ZIP (for example, \&quot;94043\&quot;). | [optional] 
**region** | **str** | Top-level administrative subdivision of the country. For example, a state like California (\&quot;CA\&quot;) or a province like Quebec (\&quot;QC\&quot;). | [optional] 
**street_address** | **str** | Street-level part of the address. Use &#x60;\\n&#x60; to add a second line. | [optional] 

## Example

```python
from openapi_client.models.account_address import AccountAddress

# TODO update the JSON string below
json = "{}"
# create an instance of AccountAddress from a JSON string
account_address_instance = AccountAddress.from_json(json)
# print the JSON string representation of the object
print(AccountAddress.to_json())

# convert the object into a dict
account_address_dict = account_address_instance.to_dict()
# create an instance of AccountAddress from a dict
account_address_from_dict = AccountAddress.from_dict(account_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


