# AddressDetails

Address details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** | Address Line1. | [optional] 
**address_line2** | **str** | Address Line2. | [optional] 
**address_line3** | **str** | Address Line3. | [optional] 
**city** | **str** | Address City. | [optional] 
**company_name** | **str** | Company Name. | [optional] 
**country** | **str** | Country code uses ISO2, 2-digit format. | [optional] 
**first_name** | **str** | First Name. | [optional] 
**last_name** | **str** | Last Name. | [optional] 
**postal_code** | **str** | Address Postal Code. | [optional] 
**region** | **str** | Address Region. | [optional] 

## Example

```python
from openapi_client.models.address_details import AddressDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AddressDetails from a JSON string
address_details_instance = AddressDetails.from_json(json)
# print the JSON string representation of the object
print(AddressDetails.to_json())

# convert the object into a dict
address_details_dict = address_details_instance.to_dict()
# create an instance of AddressDetails from a dict
address_details_from_dict = AddressDetails.from_dict(address_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


