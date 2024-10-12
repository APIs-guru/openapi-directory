# ListPopulationTerm

Remarketing List Population Rule Term.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains** | **bool** | Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default. | [optional] 
**negation** | **bool** | Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. | [optional] 
**operator** | **str** | Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. | [optional] 
**remarketing_list_id** | **str** | ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. | [optional] 
**type** | **str** | List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable. | [optional] 
**value** | **str** | Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. | [optional] 
**variable_friendly_name** | **str** | Friendly name of this term&#39;s variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM. | [optional] 
**variable_name** | **str** | Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM. | [optional] 

## Example

```python
from openapi_client.models.list_population_term import ListPopulationTerm

# TODO update the JSON string below
json = "{}"
# create an instance of ListPopulationTerm from a JSON string
list_population_term_instance = ListPopulationTerm.from_json(json)
# print the JSON string representation of the object
print(ListPopulationTerm.to_json())

# convert the object into a dict
list_population_term_dict = list_population_term_instance.to_dict()
# create an instance of ListPopulationTerm from a dict
list_population_term_from_dict = ListPopulationTerm.from_dict(list_population_term_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


