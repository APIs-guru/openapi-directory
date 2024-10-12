# OnPremDomainDetails

OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_sid_filtering** | **bool** | Optional. Option to disable SID filtering. | [optional] 
**domain_name** | **str** | Required. FQDN of the on-prem domain being migrated. | [optional] 

## Example

```python
from openapi_client.models.on_prem_domain_details import OnPremDomainDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OnPremDomainDetails from a JSON string
on_prem_domain_details_instance = OnPremDomainDetails.from_json(json)
# print the JSON string representation of the object
print(OnPremDomainDetails.to_json())

# convert the object into a dict
on_prem_domain_details_dict = on_prem_domain_details_instance.to_dict()
# create an instance of OnPremDomainDetails from a dict
on_prem_domain_details_from_dict = OnPremDomainDetails.from_dict(on_prem_domain_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


