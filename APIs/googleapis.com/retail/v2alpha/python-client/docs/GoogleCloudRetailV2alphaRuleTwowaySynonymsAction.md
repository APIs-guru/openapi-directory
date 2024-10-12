# GoogleCloudRetailV2alphaRuleTwowaySynonymsAction

Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of \"sneakers\" and \"shoes\": * \"sneakers\" will use a synonym of \"shoes\". * \"shoes\" will use a synonym of \"sneakers\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**synonyms** | **List[str]** | Defines a set of synonyms. Can specify up to 100 synonyms. Must specify at least 2 synonyms. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_rule_twoway_synonyms_action import GoogleCloudRetailV2alphaRuleTwowaySynonymsAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRuleTwowaySynonymsAction from a JSON string
google_cloud_retail_v2alpha_rule_twoway_synonyms_action_instance = GoogleCloudRetailV2alphaRuleTwowaySynonymsAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRuleTwowaySynonymsAction.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_rule_twoway_synonyms_action_dict = google_cloud_retail_v2alpha_rule_twoway_synonyms_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRuleTwowaySynonymsAction from a dict
google_cloud_retail_v2alpha_rule_twoway_synonyms_action_from_dict = GoogleCloudRetailV2alphaRuleTwowaySynonymsAction.from_dict(google_cloud_retail_v2alpha_rule_twoway_synonyms_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


