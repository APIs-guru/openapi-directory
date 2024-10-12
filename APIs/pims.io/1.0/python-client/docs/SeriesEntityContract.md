# SeriesEntityContract

Contract of the series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner** | [**SeriesEntityContractPartner**](SeriesEntityContractPartner.md) |  | [optional] 
**type** | [**SeriesEntityContractType**](SeriesEntityContractType.md) |  | 

## Example

```python
from openapi_client.models.series_entity_contract import SeriesEntityContract

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesEntityContract from a JSON string
series_entity_contract_instance = SeriesEntityContract.from_json(json)
# print the JSON string representation of the object
print(SeriesEntityContract.to_json())

# convert the object into a dict
series_entity_contract_dict = series_entity_contract_instance.to_dict()
# create an instance of SeriesEntityContract from a dict
series_entity_contract_from_dict = SeriesEntityContract.from_dict(series_entity_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


