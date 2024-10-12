# EventsEntityContract

Contract of the series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner** | [**EventsEntityContractPartner**](EventsEntityContractPartner.md) |  | 
**type** | [**EventsEntityContractType**](EventsEntityContractType.md) |  | 

## Example

```python
from openapi_client.models.events_entity_contract import EventsEntityContract

# TODO update the JSON string below
json = "{}"
# create an instance of EventsEntityContract from a JSON string
events_entity_contract_instance = EventsEntityContract.from_json(json)
# print the JSON string representation of the object
print(EventsEntityContract.to_json())

# convert the object into a dict
events_entity_contract_dict = events_entity_contract_instance.to_dict()
# create an instance of EventsEntityContract from a dict
events_entity_contract_from_dict = EventsEntityContract.from_dict(events_entity_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


