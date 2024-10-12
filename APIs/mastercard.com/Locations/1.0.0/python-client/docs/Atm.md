# Atm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_fees** | **str** | This value indicates under what conditions access fees are charged. Options are UNKNOWN, DOMESTIC, INTERNATIONAL, DOMESTIC_AND_INTERNATIONAL, NO_FEE. | [optional] 
**availability** | **str** | This value indicates the availability hours of the ATM. Options are UNKNOWN, ALWAYS_AVAILABLE, BUSINESS_HOURS, IRREGULAR_HOURS. | [optional] 
**camera** | **str** | This value indicates whether or not a security camera is present or near ATM. Options are UNKNOWN, YES, NO. | [optional] 
**handicap_accessible** | **str** | This value indicates whether or not the ATM is accessible by wheelchair. Options are UNKNOWN, YES, NO. | [optional] 
**international_maestro_accepted** | **int** | This field will provide ATM Terminals which can still process Maestro transactions but are not yet EMV chip reader enabled. Information available only for USA and Argentina till October 2014. 1&#x3D;Yes. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**owner** | **str** | This is the DBA name of the financial institution affiliate or independent service organization. | [optional] 
**shared_deposit** | **str** | This value indicates whether or not the ATM participates in the MasterCard Shared Deposit network. Options are YES or NO. | [optional] 
**sponsor** | **str** | This is the legal or business name of the entity that sponsors the owner of the ATM into the MasterCard network. | [optional] 
**support_emv** | **int** | This indicates whether the ATM has the ability to read chip cards or not. Options are 1 &#x3D; Yes 2 &#x3D; No or Empty &#x3D; Unknown. | [optional] 
**surcharge_free_alliance** | **str** | This value indicates whether or not the ATM participates in the MasterCard Shared (only) Surcharge Free Alliance network. Options are YES or NO. | [optional] 
**surcharge_free_alliance_network** | **str** | This value indicates whether or not the ATM participates in the MasterCard Shared (only) Surcharge Free Alliance network. Options are DOES_NOT_PARTICIPATE_IN_SFA, ALLPOINT_PREPAID, MONEYPASS_DEBIT, and ALL_SURCHARGE_FREE. | [optional] 

## Example

```python
from openapi_client.models.atm import Atm

# TODO update the JSON string below
json = "{}"
# create an instance of Atm from a JSON string
atm_instance = Atm.from_json(json)
# print the JSON string representation of the object
print(Atm.to_json())

# convert the object into a dict
atm_dict = atm_instance.to_dict()
# create an instance of Atm from a dict
atm_from_dict = Atm.from_dict(atm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


