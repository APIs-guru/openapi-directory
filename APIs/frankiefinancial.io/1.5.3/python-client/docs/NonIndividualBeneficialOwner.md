# NonIndividualBeneficialOwner

x

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficially_held** | **bool** | If describing an (ultimate) beneficial owner, then if any of the shared held are not benefially held, this field will be set to \&quot;false\&quot;  | 
**entity_type** | **str** | The ASIC type of the company/entity | [optional] 
**name** | **str** | Name of the company/entity | [optional] 
**percent_owned** | **float** | If describing an (ultimate) beneficial owner, the percentage of the company owned  | 
**stock_exchange_data** | [**StockExchangeData**](StockExchangeData.md) |  | [optional] 

## Example

```python
from openapi_client.models.non_individual_beneficial_owner import NonIndividualBeneficialOwner

# TODO update the JSON string below
json = "{}"
# create an instance of NonIndividualBeneficialOwner from a JSON string
non_individual_beneficial_owner_instance = NonIndividualBeneficialOwner.from_json(json)
# print the JSON string representation of the object
print(NonIndividualBeneficialOwner.to_json())

# convert the object into a dict
non_individual_beneficial_owner_dict = non_individual_beneficial_owner_instance.to_dict()
# create an instance of NonIndividualBeneficialOwner from a dict
non_individual_beneficial_owner_from_dict = NonIndividualBeneficialOwner.from_dict(non_individual_beneficial_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


