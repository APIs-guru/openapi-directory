# EnterpriseTopazSidekickAnswerSuggestedQueryCategory

Contains a list of suggested queries for a single category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The query list category. | [optional] 
**is_enabled** | **bool** | Whether this category is enabled. | [optional] 
**query** | **List[str]** | List of suggested queries to show the user. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_answer_suggested_query_category import EnterpriseTopazSidekickAnswerSuggestedQueryCategory

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAnswerSuggestedQueryCategory from a JSON string
enterprise_topaz_sidekick_answer_suggested_query_category_instance = EnterpriseTopazSidekickAnswerSuggestedQueryCategory.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAnswerSuggestedQueryCategory.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_answer_suggested_query_category_dict = enterprise_topaz_sidekick_answer_suggested_query_category_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAnswerSuggestedQueryCategory from a dict
enterprise_topaz_sidekick_answer_suggested_query_category_from_dict = EnterpriseTopazSidekickAnswerSuggestedQueryCategory.from_dict(enterprise_topaz_sidekick_answer_suggested_query_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


