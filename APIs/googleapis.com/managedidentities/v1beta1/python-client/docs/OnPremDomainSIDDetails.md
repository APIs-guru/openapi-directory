# OnPremDomainSIDDetails

OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | FQDN of the on-prem domain being migrated. | [optional] 
**sid_filtering_state** | **str** | Current SID filtering state. | [optional] 

## Example

```python
from openapi_client.models.on_prem_domain_sid_details import OnPremDomainSIDDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OnPremDomainSIDDetails from a JSON string
on_prem_domain_sid_details_instance = OnPremDomainSIDDetails.from_json(json)
# print the JSON string representation of the object
print(OnPremDomainSIDDetails.to_json())

# convert the object into a dict
on_prem_domain_sid_details_dict = on_prem_domain_sid_details_instance.to_dict()
# create an instance of OnPremDomainSIDDetails from a dict
on_prem_domain_sid_details_from_dict = OnPremDomainSIDDetails.from_dict(on_prem_domain_sid_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


