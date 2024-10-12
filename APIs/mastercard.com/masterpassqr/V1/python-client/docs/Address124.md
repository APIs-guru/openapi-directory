# Address124

Recipient's home address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | Home city. Details- 1-25 | 
**country** | **str** | The recipient&#39;s home country as an ISO 3166-1 alpha-3 country code, in uppercase. Details- alpha-3 | 
**country_subdivision** | **str** | Home state or province. US or Canada country subdivision code is required. Details- 2-3 | [optional] 
**line1** | **str** | First line of recipient&#39;s home address. Details- 1-50 | 
**line2** | **str** | Second line of recipient&#39;s home address. Details- 1-50 | [optional] 
**postal_code** | **str** | Home postal code.  Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4 | 

## Example

```python
from openapi_client.models.address124 import Address124

# TODO update the JSON string below
json = "{}"
# create an instance of Address124 from a JSON string
address124_instance = Address124.from_json(json)
# print the JSON string representation of the object
print(Address124.to_json())

# convert the object into a dict
address124_dict = address124_instance.to_dict()
# create an instance of Address124 from a dict
address124_from_dict = Address124.from_dict(address124_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


