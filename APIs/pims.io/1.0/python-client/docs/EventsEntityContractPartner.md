# EventsEntityContractPartner

Contract partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique ID identifying the contract partner. | 
**label** | **str** | Label of the contract partner. | 

## Example

```python
from openapi_client.models.events_entity_contract_partner import EventsEntityContractPartner

# TODO update the JSON string below
json = "{}"
# create an instance of EventsEntityContractPartner from a JSON string
events_entity_contract_partner_instance = EventsEntityContractPartner.from_json(json)
# print the JSON string representation of the object
print(EventsEntityContractPartner.to_json())

# convert the object into a dict
events_entity_contract_partner_dict = events_entity_contract_partner_instance.to_dict()
# create an instance of EventsEntityContractPartner from a dict
events_entity_contract_partner_from_dict = EventsEntityContractPartner.from_dict(events_entity_contract_partner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


