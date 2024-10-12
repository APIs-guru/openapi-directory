# SeriesEntityContractType

Contract type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | String identifying the contract type. | 
**label** | **str** | Label of the contract type. This value is translated according to the &#39;Accept-Language&#39; header. | 

## Example

```python
from openapi_client.models.series_entity_contract_type import SeriesEntityContractType

# TODO update the JSON string below
json = "{}"
# create an instance of SeriesEntityContractType from a JSON string
series_entity_contract_type_instance = SeriesEntityContractType.from_json(json)
# print the JSON string representation of the object
print(SeriesEntityContractType.to_json())

# convert the object into a dict
series_entity_contract_type_dict = series_entity_contract_type_instance.to_dict()
# create an instance of SeriesEntityContractType from a dict
series_entity_contract_type_from_dict = SeriesEntityContractType.from_dict(series_entity_contract_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


