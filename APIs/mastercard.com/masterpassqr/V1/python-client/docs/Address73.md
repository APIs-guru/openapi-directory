# Address73

Address of the sender.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the sender. Details- 1-25 | [optional] 
**country** | **str** | Country of the sender as an ISO alpha country code. Details- Alpha, Length: 3 | [optional] 
**country_subdivision** | **str** | State or province of the sender. If the payment_transfer.sender.address.country is USA or CAN, the country subdivision is required. Details- Conditional, Alpha, 2-3 | [optional] 
**line1** | **str** | First line of the address of the sender. Details- 1-50 | [optional] 
**line2** | **str** | Second line of the address of the sender. Details- 1-50 | [optional] 
**postal_code** | **str** | Postal code of the sender. Format in 5 digits or 5 digits hyphen 4 digits.  Details numeric length: 5 or 5-4 | [optional] 

## Example

```python
from openapi_client.models.address73 import Address73

# TODO update the JSON string below
json = "{}"
# create an instance of Address73 from a JSON string
address73_instance = Address73.from_json(json)
# print the JSON string representation of the object
print(Address73.to_json())

# convert the object into a dict
address73_dict = address73_instance.to_dict()
# create an instance of Address73 from a dict
address73_from_dict = Address73.from_dict(address73_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


