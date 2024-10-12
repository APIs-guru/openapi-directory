# GoogleCloudRetailV2betaRuleRedirectAction

Redirects a shopper to a specific page. * Rule Condition: Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_uri** | **str** | URL must have length equal or less than 2000 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_rule_redirect_action import GoogleCloudRetailV2betaRuleRedirectAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaRuleRedirectAction from a JSON string
google_cloud_retail_v2beta_rule_redirect_action_instance = GoogleCloudRetailV2betaRuleRedirectAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaRuleRedirectAction.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_rule_redirect_action_dict = google_cloud_retail_v2beta_rule_redirect_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaRuleRedirectAction from a dict
google_cloud_retail_v2beta_rule_redirect_action_from_dict = GoogleCloudRetailV2betaRuleRedirectAction.from_dict(google_cloud_retail_v2beta_rule_redirect_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


