# GoogleCloudRetailV2RuleDoNotAssociateAction

Prevents `query_term` from being associated with specified terms during search. Example: Don't associate \"gShoe\" and \"cheap\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**do_not_associate_terms** | **List[str]** | Cannot contain duplicates or the query term. Can specify up to 100 terms. | [optional] 
**query_terms** | **List[str]** | Terms from the search query. Will not consider do_not_associate_terms for search if in search query. Can specify up to 100 terms. | [optional] 
**terms** | **List[str]** | Will be [deprecated &#x3D; true] post migration; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_rule_do_not_associate_action import GoogleCloudRetailV2RuleDoNotAssociateAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RuleDoNotAssociateAction from a JSON string
google_cloud_retail_v2_rule_do_not_associate_action_instance = GoogleCloudRetailV2RuleDoNotAssociateAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RuleDoNotAssociateAction.to_json())

# convert the object into a dict
google_cloud_retail_v2_rule_do_not_associate_action_dict = google_cloud_retail_v2_rule_do_not_associate_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2RuleDoNotAssociateAction from a dict
google_cloud_retail_v2_rule_do_not_associate_action_from_dict = GoogleCloudRetailV2RuleDoNotAssociateAction.from_dict(google_cloud_retail_v2_rule_do_not_associate_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


