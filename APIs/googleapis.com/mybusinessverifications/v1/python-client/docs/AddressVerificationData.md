# AddressVerificationData

Display data for verifications through postcard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**PostalAddress**](PostalAddress.md) |  | [optional] 
**business** | **str** | Merchant&#39;s business name. | [optional] 
**expected_delivery_days_region** | **int** | Expected number of days it takes to deliver a postcard to the address&#39;s region. | [optional] 

## Example

```python
from openapi_client.models.address_verification_data import AddressVerificationData

# TODO update the JSON string below
json = "{}"
# create an instance of AddressVerificationData from a JSON string
address_verification_data_instance = AddressVerificationData.from_json(json)
# print the JSON string representation of the object
print(AddressVerificationData.to_json())

# convert the object into a dict
address_verification_data_dict = address_verification_data_instance.to_dict()
# create an instance of AddressVerificationData from a dict
address_verification_data_from_dict = AddressVerificationData.from_dict(address_verification_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


