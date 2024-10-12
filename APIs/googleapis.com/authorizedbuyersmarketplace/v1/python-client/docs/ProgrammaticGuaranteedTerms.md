# ProgrammaticGuaranteedTerms

Pricing terms for Programmatic Guaranteed Deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_price** | [**Price**](Price.md) |  | [optional] 
**guaranteed_looks** | **str** | Count of guaranteed looks. For CPD deals, buyer changes to guaranteed_looks will be ignored. | [optional] 
**impression_cap** | **str** | The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached. | [optional] 
**minimum_daily_looks** | **str** | Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. | [optional] 
**percent_share_of_voice** | **str** | For sponsorship deals, this is the percentage of the seller&#39;s eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100. | [optional] 
**reservation_type** | **str** | The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. | [optional] 

## Example

```python
from openapi_client.models.programmatic_guaranteed_terms import ProgrammaticGuaranteedTerms

# TODO update the JSON string below
json = "{}"
# create an instance of ProgrammaticGuaranteedTerms from a JSON string
programmatic_guaranteed_terms_instance = ProgrammaticGuaranteedTerms.from_json(json)
# print the JSON string representation of the object
print(ProgrammaticGuaranteedTerms.to_json())

# convert the object into a dict
programmatic_guaranteed_terms_dict = programmatic_guaranteed_terms_instance.to_dict()
# create an instance of ProgrammaticGuaranteedTerms from a dict
programmatic_guaranteed_terms_from_dict = ProgrammaticGuaranteedTerms.from_dict(programmatic_guaranteed_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


