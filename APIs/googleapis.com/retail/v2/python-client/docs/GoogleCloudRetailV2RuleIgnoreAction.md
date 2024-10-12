# GoogleCloudRetailV2RuleIgnoreAction

Prevents a term in the query from being used in search. Example: Don't search for \"shoddy\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_terms** | **List[str]** | Terms to ignore in the search query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_rule_ignore_action import GoogleCloudRetailV2RuleIgnoreAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RuleIgnoreAction from a JSON string
google_cloud_retail_v2_rule_ignore_action_instance = GoogleCloudRetailV2RuleIgnoreAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RuleIgnoreAction.to_json())

# convert the object into a dict
google_cloud_retail_v2_rule_ignore_action_dict = google_cloud_retail_v2_rule_ignore_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2RuleIgnoreAction from a dict
google_cloud_retail_v2_rule_ignore_action_from_dict = GoogleCloudRetailV2RuleIgnoreAction.from_dict(google_cloud_retail_v2_rule_ignore_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


