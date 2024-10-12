# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | ISO 3166-1 alpha-2 country code, for example DE | 
**locality** | **str** | The locality/city. For example, Mountain View. | 
**post_office_box_number** | **str** | The post office box number for PO box addresses. | [optional] 
**postal_code** | **str** | A postal code. For example, 9404 | 
**region** | **str** | The region. For example, CA | [optional] 
**street_address** | **str** | The street address. For example, 1600 Amphitheatre Pkwy. | 

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


