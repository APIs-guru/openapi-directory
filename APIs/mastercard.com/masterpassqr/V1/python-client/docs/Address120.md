# Address120

Sender's home address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | Home city. Details- 1-25 | [optional] 
**country** | **str** | The sender&#39;s home country as an ISO 3166-1 alpha-3 country code, in uppercase. Conditional - required if Sanction Screening validation is enabled. Details- alpha-3 | [optional] 
**country_subdivision** | **str** | Home state or province. US or Canada country subdivision code is required. Details- 2-3 | [optional] 
**line1** | **str** |  First line of sender&#39;s home address. Details- 1-50 | [optional] 
**line2** | **str** | Second line of sender&#39;s home address. Details- 1-50 | [optional] 
**postal_code** | **str** | Home postal code. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4 | [optional] 

## Example

```python
from openapi_client.models.address120 import Address120

# TODO update the JSON string below
json = "{}"
# create an instance of Address120 from a JSON string
address120_instance = Address120.from_json(json)
# print the JSON string representation of the object
print(Address120.to_json())

# convert the object into a dict
address120_dict = address120_instance.to_dict()
# create an instance of Address120 from a dict
address120_from_dict = Address120.from_dict(address120_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


