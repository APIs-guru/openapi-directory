# GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment

Each facet position adjustment consists of a single attribute name (i.e. facet key) along with a specified position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | The attribute name to force return as a facet. Each attribute name should be a valid attribute name, be non-empty and contain at most 80 characters long. | [optional] 
**position** | **int** | This is the position in the request as explained above. It should be strictly positive be at most 100. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_rule_force_return_facet_action_facet_position_adjustment import GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment from a JSON string
google_cloud_retail_v2beta_rule_force_return_facet_action_facet_position_adjustment_instance = GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_rule_force_return_facet_action_facet_position_adjustment_dict = google_cloud_retail_v2beta_rule_force_return_facet_action_facet_position_adjustment_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment from a dict
google_cloud_retail_v2beta_rule_force_return_facet_action_facet_position_adjustment_from_dict = GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment.from_dict(google_cloud_retail_v2beta_rule_force_return_facet_action_facet_position_adjustment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


