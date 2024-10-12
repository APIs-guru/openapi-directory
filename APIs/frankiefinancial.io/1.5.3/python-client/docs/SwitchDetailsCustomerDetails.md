# SwitchDetailsCustomerDetails

Customer's details required to switch retailers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Customer&#39;s supply address address. If no address is passed, the supply address as read off the bill will be used | [optional] 
**date_of_birth** | **str** | Customer&#39;s date of birth | 
**email** | **str** | Customer&#39;s email address | 
**evidence_of_identity** | [**SwitchDetailsCustomerDetailsEvidenceOfIdentity**](SwitchDetailsCustomerDetailsEvidenceOfIdentity.md) |  | 
**mobile** | **str** | Customer&#39;s phone number | 
**name** | [**SwitchDetailsCustomerDetailsName**](SwitchDetailsCustomerDetailsName.md) |  | 

## Example

```python
from openapi_client.models.switch_details_customer_details import SwitchDetailsCustomerDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchDetailsCustomerDetails from a JSON string
switch_details_customer_details_instance = SwitchDetailsCustomerDetails.from_json(json)
# print the JSON string representation of the object
print(SwitchDetailsCustomerDetails.to_json())

# convert the object into a dict
switch_details_customer_details_dict = switch_details_customer_details_instance.to_dict()
# create an instance of SwitchDetailsCustomerDetails from a dict
switch_details_customer_details_from_dict = SwitchDetailsCustomerDetails.from_dict(switch_details_customer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


