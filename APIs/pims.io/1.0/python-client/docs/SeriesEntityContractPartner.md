# SeriesEntityContractPartner

Contract partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique ID identifying the contract partner. | 
**label** | **str** | Label of the contract partner. | 

## Example

```python
from openapi_client.models.series_entity_contract_partner import SeriesEntityContractPartner

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesEntityContractPartner from a JSON string
series_entity_contract_partner_instance = SeriesEntityContractPartner.from_json(json)
# print the JSON string representation of the object
print(SeriesEntityContractPartner.to_json())

# convert the object into a dict
series_entity_contract_partner_dict = series_entity_contract_partner_instance.to_dict()
# create an instance of SeriesEntityContractPartner from a dict
series_entity_contract_partner_from_dict = SeriesEntityContractPartner.from_dict(series_entity_contract_partner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


