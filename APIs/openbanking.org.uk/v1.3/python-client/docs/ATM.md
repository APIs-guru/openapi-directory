# ATM


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atmid** | **str** | ATM terminal device identification for the acquirer and the issuer | 
**atm_services** | **List[str]** | Information about ATM services | 
**accessibility_types** | **List[str]** | Information about the accessibility | [optional] 
**additional_atm_services** | **List[str]** | ATM Service Description | [optional] 
**address** | [**ATMAddress**](ATMAddress.md) |  | 
**branch_identification** | **str** | Unique and unambiguous identification of a retail branch of a financial institution | [optional] 
**currency** | **List[str]** | Defines currency type available for dispense | 
**geographic_location** | [**ATMGeographicLocation**](ATMGeographicLocation.md) |  | 
**location_category** | **str** | Indicates the environment of the ATM | [optional] 
**minimum_value_dispensed** | **str** | Minimum currency denominations usually available | [optional] 
**organisation** | [**ATMOrganisation**](ATMOrganisation.md) |  | 
**site_id** | **str** | Site identifying code, where ATM is located | [optional] 
**site_name** | **str** | Site identifying name, where ATM is located | [optional] 
**supported_languages** | **List[str]** | Languages that the ATM supports | 

## Example

```python
from openapi_client.models.atm import ATM

# TODO update the JSON string below
json = "{}"
# create an instance of ATM from a JSON string
atm_instance = ATM.from_json(json)
# print the JSON string representation of the object
print(ATM.to_json())

# convert the object into a dict
atm_dict = atm_instance.to_dict()
# create an instance of ATM from a dict
atm_from_dict = ATM.from_dict(atm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


