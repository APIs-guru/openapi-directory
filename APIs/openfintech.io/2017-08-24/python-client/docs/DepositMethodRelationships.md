# DepositMethodRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actiove_in_countries** | [**ActiveInCountriesRelationship**](ActiveInCountriesRelationship.md) |  | [optional] 
**currencies** | [**CurrencyParent**](CurrencyParent.md) |  | [optional] 
**payment_processor** | [**DepositMethodProcessorData**](DepositMethodProcessorData.md) |  | [optional] 
**supported_psps** | [**SupportedPspsRelationship**](SupportedPspsRelationship.md) |  | [optional] 

## Example

```python
from openapi_client.models.deposit_method_relationships import DepositMethodRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of DepositMethodRelationships from a JSON string
deposit_method_relationships_instance = DepositMethodRelationships.from_json(json)
# print the JSON string representation of the object
print(DepositMethodRelationships.to_json())

# convert the object into a dict
deposit_method_relationships_dict = deposit_method_relationships_instance.to_dict()
# create an instance of DepositMethodRelationships from a dict
deposit_method_relationships_from_dict = DepositMethodRelationships.from_dict(deposit_method_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


