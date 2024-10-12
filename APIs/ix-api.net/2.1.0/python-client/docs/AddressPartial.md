# AddressPartial



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | ISO 3166-1 alpha-2 country code, for example DE | [optional] 
**locality** | **str** | The locality/city. For example, Mountain View. | [optional] 
**post_office_box_number** | **str** | The post office box number for PO box addresses. | [optional] 
**postal_code** | **str** | A postal code. For example, 9404 | [optional] 
**region** | **str** | The region. For example, CA | [optional] 
**street_address** | **str** | The street address. For example, 1600 Amphitheatre Pkwy. | [optional] 

## Example

```python
from openapi_client.models.address_partial import AddressPartial

# TODO update the JSON string below
json = "{}"
# create an instance of AddressPartial from a JSON string
address_partial_instance = AddressPartial.from_json(json)
# print the JSON string representation of the object
print(AddressPartial.to_json())

# convert the object into a dict
address_partial_dict = address_partial_instance.to_dict()
# create an instance of AddressPartial from a dict
address_partial_from_dict = AddressPartial.from_dict(address_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


